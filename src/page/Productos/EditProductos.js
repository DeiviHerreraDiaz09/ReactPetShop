import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


function EditProductos() {

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        axios.get('http://localhost:3030/Productos/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(event) {

        event.preventDefault()
        axios.put('http://localhost:3030/Productos/' + id, data)
            .then(res => {

                alert("Registro actualizado correctamente :D")
                navigate('/Productos')
            })

    }

    return (

        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">ID:</label>
                        <input type="text" disabled name='id' className='form-control' value={data.id}/>
                    </div>


                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name='Nombre' className='form-control' value={data.Nombre}
                               onChange={e => setData({...data, Nombre: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Categoria:</label>
                        <input type="text" name='Categoria' className='form-control' value={data.Categoria}
                               onChange={e => setData({...data, Categoria: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Fecha de caducidad:</label>
                        <input type="Date" name='Fecha_Caducidad' className='form-control' value={data.Fecha_Caducidad}
                               onChange={e => setData({...data, Fecha_Caducidad: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Valor:</label>
                        <input type="Number" name='Valor' className='form-control' value={data.Valor}
                               onChange={e => setData({...data, Valor: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Presentación:</label>
                        <input type="text" name='Presentación' className='form-control' value={data.Presentación}
                               onChange={e => setData({...data, Presentación: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Fabricante:</label>
                        <input type="text" name='Fabricante' className='form-control' value={data.Fabricante}
                               onChange={e => setData({...data, Fabricante: e.target.value})}/>
                    </div>

                    <br/>
                    <button className='btn btn-info'>Actualizar</button>
                </form>


            </div>
        </div>

    )

}

export default EditProductos;

