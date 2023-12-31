import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AddVenta = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const selectedProductId = queryParams.get("productId");
    const userId = queryParams.get("userId");
    const userName = queryParams.get("userName");
    const userLastName = queryParams.get("userLastName");

    const [inputData, setInputData] = useState({
        tipodoc: 'Cédula Ciudadanía',
        numdoc: userId || '',
        nombre: userName || '',
        apellido: userLastName || '',
        id_producto: selectedProductId
    });

    const navigate = useNavigate();

    useEffect(() => {

    }, [selectedProductId]);

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:3030/Venta', inputData)
            .then(res => {
                alert("Registro correctamente :D");
                navigate('/Index');
            })
            .catch(err => console.log(err));
    }

    function handleSelectChange(event) {
        setInputData({
            ...inputData,
            tipodoc: event.target.value
        });
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <h2 className="text-center mb-4">Completar venta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="numdoc">Documento de la persona:</label>
                        <input
                            type="text"
                            name='numdoc'
                            className='form-control'
                            value={inputData.numdoc}
                            readOnly
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="id_producto">ID del producto:</label>
                        <input
                            type="number"
                            name='id_producto'
                            className='form-control'
                            value={inputData.id_producto}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input

                            type="number"
                            name='cantidad'
                            className='form-control'
                            onChange={e => setInputData({ ...inputData, cantidad: e.target.value })} // Cambiado de 'Cantidad' a 'cantidad'
                        />
                    </div>

                    <button className='btn btn-info'>Comprar</button>
                </form>
            </div>
        </div>
    );
}

export default AddVenta;
