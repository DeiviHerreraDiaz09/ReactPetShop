import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddUsuarios() {
    const [inputData, setInputData] = useState({
        tipodoc: 'Cédula Ciudadanía',
        numdoc: '',
        fechaNac: '',
        nombre: '',
        apellido: '',
        Contraseña: ''
    })

    const navigat = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:3030/Usuarios', inputData)
            .then(res => {
                alert("Registro correctamente :D")
                navigat('/Index')
            })
            .catch(err => console.log(err))
    }

    function handleSelectChange(event) {
        setInputData({
            ...inputData,
            tipodoc: event.target.value
        })
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <h2 className="text-center mb-4">Registrar Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="tipodoc">Tipo de documento:</label>
                        <select
                            name="tipodoc"
                            className='form-control'
                            value={inputData.tipodoc}
                            onChange={handleSelectChange}
                        >
                            <option value="Cédula Ciudadanía">Cédula Ciudadanía</option>
                            <option value="Cédula de extranjeria">Cédula de extranjeria</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numdoc">Documento:</label>
                        <input type="text" name='numdoc' className='form-control'
                               onChange={e => setInputData({...inputData, numdoc: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaNac">Fecha de nacimiento:</label>
                        <input type="date" name='fechaNac' className='form-control'
                               onChange={e => setInputData({...inputData, fechaNac: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" name='nombre' className='form-control'
                               onChange={e => setInputData({...inputData, nombre: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" name='apellido' className='form-control'
                               onChange={e => setInputData({...inputData, apellido: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Contraseña">Contraseña:</label>
                        <input type="password" name='Contraseña' className='form-control'
                               onChange={e => setInputData({...inputData, Contraseña: e.target.value})}/>
                    </div>

                    <button className='btn btn-info'>Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default AddUsuarios
