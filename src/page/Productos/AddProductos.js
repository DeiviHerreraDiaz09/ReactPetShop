import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./Style.css"

const cookies = new Cookies();

function AddProductos() {
    const [inputData, setInputData] = useState({
        Nombre: '',
        Categoria: '',
        Fecha_Caducidad: '',
        Valor: '',
        Presentación: '',
        Fabricante: '',
        id_tienda: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData({...inputData, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const tiendaId = cookies.get('TiendaId');
            inputData.id_tienda = tiendaId;


            await axios.post('http://localhost:3030/Productos', inputData);
            alert('Registro correctamente :D');
            navigate('/Productos');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <h2 className="titulo">AGREGAR PRODUCTO A TU TIENDA</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Nombre" className="form-label">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="Nombre"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Nombre}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Categoria" className="form-label">
                            Categoría:
                        </label>
                        <input
                            type="text"
                            name="Categoria"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Categoria}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Fecha_Caducidad" className="form-label">
                            Fecha de caducidad:
                        </label>
                        <input
                            type="date"
                            name="Fecha_Caducidad"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Fecha_Caducidad}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Valor" className="form-label">
                            Valor:
                        </label>
                        <input
                            type="number"
                            name="Valor"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Valor}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Presentación" className="form-label">
                            Presentación:
                        </label>
                        <input
                            type="text"
                            name="Presentación"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Presentación}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Fabricante" className="form-label">
                            Fabricante:
                        </label>
                        <input
                            type="text"
                            name="Fabricante"
                            className="form-control"
                            onChange={handleChange}
                            value={inputData.Fabricante}
                        />
                    </div>

                    <button type="submit" className="btn btn-info">
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProductos;
