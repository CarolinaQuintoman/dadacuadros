import React from 'react';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';

const ItemList = ({productos}) => {
    
    return (
      <>
         {
           productos.length > 0 ? (
             productos.map((producto) =>
             <Item 
               precio = {producto.precio}
               titulo = {producto.titulo}
               imagen = {producto.imagen}
               id = {producto.id}
               key = {producto.id}
               
               />)
           ) : (
             <h1><Loader/></h1>
           )
         }
      </>
    
    )
  }

export default ItemList