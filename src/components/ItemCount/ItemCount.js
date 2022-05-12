import React, { useState } from 'react';



const ItemCount = ({ stock, initial, onAdd}) => {

    const [ contador, setContador] = useState (initial || 10);

    const Restar = () =>{
        if(contador === 1){
            console.log('No hay nada para restar')
        }
        else{
            setContador(contador - 1)
        }
    };

    const Sumar = () =>{
        if(contador >= stock){
            console.log('Producto sin Stock')
        }
        else{
            setContador(contador + 1)
        }
    };

    const agregarCarrito = () => {
        onAdd(contador)
    }

    return (
    <div style={{textAlign:'Center', marginTop:'20px', background:'#d9dee6',width:'50%'}}>
        
        
        <h1> Espejo: {contador}</h1>
        <div style={{display:'flex', justifyContent:'center', margin:'2px', alignContent:'baseline'}}>
            <button style={{border:'none', borderRadius: "2px" }} 
                    onClick ={() => setContador (Sumar)} >+</button>
            <h3>{contador}</h3>
            <button style={{border:'none', borderRadius: "2px" }} 
                    onClick ={() => setContador (Restar)}>-</button>
        </div>
        <div>
            <button onClick={agregarCarrito}>Agregar al Carrito : {contador}</button>
        </div>
    </div>
  )
}

export default ItemCount