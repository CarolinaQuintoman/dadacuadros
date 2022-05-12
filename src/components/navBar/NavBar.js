import React from 'react';
import NavBarLogo from '../../assets/logo_small.png';
import CardWidgest from '../CardWidgest/CardWidgest';
//import { NavLink } from 'react-router-dom';



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
                        <li className="nav-item"><a className="nav-link" href="/">Productos</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Contacto</a></li>
                    </ul>
                    <CardWidgest />
                </div>
            </div>
    </nav>
  )
}

export default NavBar