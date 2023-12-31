import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


function EditTiendas() {

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        axios.get('http://localhost:3030/Tienda/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(event) {

        event.preventDefault()
        axios.put('http://localhost:3030/Tienda/' + id, data)
            .then(res => {

                alert("Registro actualizado correctamente :D")
                navigate('/Tiendas')
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
                        <label htmlFor="name">Direccion:</label>
                        <input type="text" name='Direccion' className='form-control' value={data.Direccion}
                               onChange={e => setData({...data, Direccion: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Telefono:</label>
                        <input type="text" name='Telefono' className='form-control' value={data.Telefono}
                               onChange={e => setData({...data, Telefono: e.target.value})}/>
                    </div>
                    <br/>
                    <button className='btn btn-info'>Actualizar</button>
                </form>


            </div>
        </div>

    )

}

export default EditTiendas;

