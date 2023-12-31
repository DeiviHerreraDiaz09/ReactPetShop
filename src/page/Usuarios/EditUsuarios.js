import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


function EditUsuarios() {

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        axios.get('http://localhost:3030/Usuarios/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    function handleSubmit(event) {

        event.preventDefault()
        axios.put('http://localhost:3030/Usuarios/' + id, data)
            .then(res => {

                alert("Registro actualizado correctamente :D")
                navigate('/Usuarios')
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
                        <label htmlFor="name">Tipo de documento:</label>
                        <select name="tipodoc" className='form-select' value={data.tipodoc}
                                onChange={e => setData({...data, tipodoc: e.target.value})}>
                            <option value="Cédula Ciudadanía">Cédula Ciudadanía</option>
                            <option value="Cédula de extranjeria">Cédula de extranjeria</option>

                        </select>
                    </div>

                    <div>
                        <label htmlFor="name">Documento:</label>
                        <input type="text" name='numdoc' className='form-control' value={data.numdoc}
                               onChange={e => setData({...data, numdoc: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Fecha de nacimiento:</label>
                        <input type="date" name='fechaNac' className='form-control' value={data.fechaNac}
                               onChange={e => setData({...data, fechaNac: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name='nombre' className='form-control' value={data.nombre}
                               onChange={e => setData({...data, nombre: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Apellido:</label>
                        <input type="text" name='apellido' className='form-control' value={data.apellido}
                               onChange={e => setData({...data, apellido: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Nacionalidad:</label>
                        <input type="text" name='Nacionalidad' className='form-control' value={data.Nacionalidad}
                               onChange={e => setData({...data, Nacionalidad: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Contraseña:</label>
                        <input type="password" name='Contraseña' className='form-control' value={data.Contraseña}
                               onChange={e => setData({...data, Contraseña: e.target.value})}/>
                    </div>
                    <br/>
                    <button className='btn btn-info'>Actualizar</button>
                </form>


            </div>
        </div>

    )

}

export default EditUsuarios;

