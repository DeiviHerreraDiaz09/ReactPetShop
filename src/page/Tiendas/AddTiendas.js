import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddTiendas() {

    const [inputData, setInputData] = useState({Nombre: '', Direccion: '', Telefono: ''})


    const navigat = useNavigate();

    function handleSubmit(event) {

        event.preventDefault()

        axios.post('http://localhost:3030/Tienda', inputData)
            .then(res => {
                alert("Registro correctamente :D")
                navigat('/Index');

            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <h2 className="text-center mb-4">Registrar Tienda</h2>
                <form onSubmit={handleSubmit}>


                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name='Nombre' className='form-control'
                               onChange={e => setInputData({...inputData, Nombre: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Número de acceso:</label>
                        <input type="number" name='Num_acceso' className='form-control'
                               onChange={e => setInputData({...inputData, Num_acceso: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Direccion:</label>
                        <input type="text" name='Direccion' className='form-control'
                               onChange={e => setInputData({...inputData, Direccion: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="name">Telefono:</label>
                        <input type="text" name='Telefono' className='form-control'
                               onChange={e => setInputData({...inputData, Telefono: e.target.value})}/>
                    </div>

                    <br/>


                    <button className='btn btn-info'>Agregar</button>
                </form>


            </div>
        </div>
    )
}

export default AddTiendas