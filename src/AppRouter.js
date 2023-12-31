import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Usuarios from './page/Usuarios/Usuarios';
import AddUsuarios from './page/Usuarios/AddUsuarios';
import EditUsuarios from './page/Usuarios/EditUsuarios';
import Login from './page/login';

import Tiendas from './page/Tiendas/Tiendas';
import AddProductos from './page/Productos/AddProductos';
import EditProductos from './page/Productos/EditProductos';
import Index from './page/Index';
import Productos from './page/Productos/Productos';
import AddTiendas from './page/Tiendas/AddTiendas';
import EditTiendas from './page/Tiendas/EditTiendas';
import Cookies from 'universal-cookie';
import AddVenta from "./page/Venta/AddVenta";
import LoginTiendas from "./page/Tiendas/loginTiendas";

const cookies = new Cookies();

function AppRouter() {

    const user = cookies.get('id');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Index" element={<Index/>}/>

                {/* INICIO DE SESIÓN */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/loginTiendas" element={<LoginTiendas/>}/>

                {/* USUARIOS */}
                <Route path="/Usuarios" element={user ? <Usuarios/> : <Navigate to="/login"/>}/>
                <Route path='/createUsuarios' element={<AddUsuarios/>}/>
                <Route path="/updateUsuarios/:id" element={user ? <EditUsuarios/> : <Navigate to="/login"/>}/>

                {/* PRODUCTOS */}
                <Route path="/Productos" element={user ? <Productos/> : <Navigate to="/login"/>}/>
                <Route path="/createProductos" element={user ? <AddProductos/> : <Navigate to="/login"/>}/>
                <Route path="/updateProductos/:id" element={user ? <EditProductos/> : <Navigate to="/login"/>}/>

                {/* TIENDAS */}
                <Route path="/Tiendas" element={user ? <Tiendas/> : <Navigate to="/login"/>}/>
                <Route path="/createTiendas" element={<AddTiendas/>}/>
                <Route path="/updateTiendas/:id" element={user ? <EditTiendas/> : <Navigate to="/login"/>}/>

                {/*VENTAS*/}

                <Route path="/createVenta" element={user ? <AddVenta/> : <Navigate to="/login"/>}/>


            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;