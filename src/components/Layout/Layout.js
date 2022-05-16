import React from 'react'
import { Outlet } from 'react-router-dom' //es un atributo outlet
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar'


const Layout = () => {
  
  return (
    <>
    <NavBar />
    {/*El outlet es el remplazo de todo lo que 
    esta envuelto en mis rutas <Route></Route> */} 
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout