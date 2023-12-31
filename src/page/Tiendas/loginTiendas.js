import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3030/Tienda";
const cookies = new Cookies();

const LoginTiendas = () => {
    const [form, setForm] = useState({
        Nombre: '',
        Num_acceso: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const iniciarSesion = async () => {
        try {
            const response = await axios.get(baseUrl, {
                params: {
                    Nombre: form.Nombre,
                    Num_acceso: form.Num_acceso
                }
            });

            if (response.data.length > 0) {
                var respuesta = response.data[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('Nombre', respuesta.Nombre, {path: "/"});


                cookies.set('TiendaId', respuesta.id, {path: "/"});

                alert(`Bienvenido ${respuesta.Nombre}`);

                window.location.href = "/Productos";
            } else {
                alert('Tienda no existente o credenciales incorrectas');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to="#">
                        <b>Inicio de </b>Sesión TIENDAS
                    </Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>

                        <form>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    id="Nombre"
                                    name="Nombre"
                                    onChange={handleChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Número de acceso"
                                    id="Num_acceso"
                                    name="Num_acceso"
                                    onChange={handleChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button
                                    type="button"
                                    className="btn btn-block btn-primary"
                                    onClick={iniciarSesion}
                                >
                                    <i/> Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginTiendas;
