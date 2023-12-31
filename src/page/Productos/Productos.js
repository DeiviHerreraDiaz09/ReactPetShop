import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Style.css"

const cookies = new Cookies();

function Productos() {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    const cerrarSesion = () => {

        cookies.remove('id', {path: "/"});
        cookies.remove('Nombre', {path: "/"});

        navigate("/index");
    };

    useEffect(() => {

        const tiendaId = cookies.get('id');

        if (!tiendaId) {

            navigate("/loginTiendas");
        } else {

            axios.get(`http://localhost:3030/Productos?id_tienda=${tiendaId}`)
                .then((res) => {
                    const data = res.data;
                    setColumns(Object.keys(data[0]));
                    setRecords(data);
                })
                .catch((err) => console.log(err));
        }
    }, [navigate]);

    const handleDelete = (id) => {
        const conf = window.confirm("¿Estás seguro de eliminarlo?");
        if (conf) {
            axios.delete(`http://localhost:3030/Productos/${id}`)
                .then(() => {
                    alert("Registro eliminado :(");
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container mt-5">

            <h1 className="titulo">GESTIÓN DE TUS PRODUCTOS</h1>
            <figcaption className="subtitulo">
                Tus productos de <cite title="Source Title">Confianza</cite>
            </figcaption>

            <div className="text-end">
                <button onClick={cerrarSesion} className="btn btn-danger">Cerrar Sesión</button>
                <Link to="/createProductos" className="btn btn-primary ms-2">Add +</Link>
            </div>

            <br/>

            <table className="table-custom">
                <thead>
                <tr>
                    {columns.map((c, i) => (
                        <th key={i}>{c}</th>
                    ))}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {records.map((d, i) => (
                    <tr key={i}>
                        {columns.map((c, j) => (
                            <td key={j}>{d[c]}</td>
                        ))}
                        <td>
                            <Link to={`/updateProductos/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                            <button onClick={() => handleDelete(d.id)} className="btn btn-sm ms-1 btn-danger">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Productos;
