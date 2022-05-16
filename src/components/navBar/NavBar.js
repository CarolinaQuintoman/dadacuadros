import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarLogo from '../../assets/logo_small.png';
import CardWidgest from '../CardWidgest/CardWidgest';




const NavBar = () => {
  return (
    <>
    <div className="navbar navbar-dark bg-dark navbar-expand"  id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>
                    <img src={NavBarLogo} style={{maxWidth:"50%"}} alt="..." />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li  className="nav-item">
                            <NavLink className="nav-NavLink" to="/">Home</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink className="nav-NavLink" to="/productos">Productos</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink className="nav-NavLink" to="/servicios">Servicios</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink className="nav-NavLink" to="/about">Quienes somos</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink className="nav-NavLink" to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    <CardWidgest />
                </div>
            </div>
        <div/>
       </div> 
    </>
  )
}

export default NavBar