import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';


const baseUrl = "http://localhost:3030/Usuarios";
const cookies = new Cookies();

const Login = () => {
    const [form, setForm] = useState({
        numdoc: '',
        Contraseña: ''
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
                    numdoc: form.numdoc,
                    Contraseña: form.Contraseña
                }
            });
            console.log("Datos enviados:", form);
            console.log("Respuesta del servidor:", response.data);

            if (response.data.length > 0) {
                var respuesta = response.data[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('numdoc', respuesta.numdoc, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});

                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);

                window.location.href = "/Index";

            } else {
                alert('El usuario o la contraseña no son correctos');
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log('id' + cookies.get('id'));
    console.log('nombre' + cookies.get('nombre'));
    console.log('apellido' + cookies.get('apellido'));
    console.log('Contraseña' + cookies.get('Contraseña'));
    console.log('numdoc' + cookies.get('numdoc'));

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to="#">
                        <b>Inicio de </b>Sesión
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
                                    placeholder="Documento"
                                    id="numdoc"
                                    name="numdoc"
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
                                    placeholder="Contraseña"
                                    id="Contraseña"
                                    name="Contraseña"
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

export default Login;
