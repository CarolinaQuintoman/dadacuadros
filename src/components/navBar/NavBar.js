import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarLogo from '../../assets/logo_small.png';
import CardWidgest from '../CardWidgest/CardWidgest';




const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand"  id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src={NavBarLogo} style={{maxWidth:"50%"}} alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <NavLink className="nav-item"><a className="nav-NavLink" href="/">Home</a></NavLink>
                        <NavLink className="nav-item"><a className="nav-NavLink" href="/">Productos</a></NavLink>
                        <NavLink className="nav-item"><a className="nav-NavLink" href="/">Servicios</a></NavLink>
                        <NavLink className="nav-item"><a className="nav-NavLink" href="/">Quienes somos</a></NavLink>
                        <NavLink className="nav-item"><a className="nav-NavLink" href="/">Contacto</a></NavLink>
                    </ul>
                    <CardWidgest />
                </div>
            </div>
    </nav>
  )
}

export default NavBar