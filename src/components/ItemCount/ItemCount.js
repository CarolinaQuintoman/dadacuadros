import React, { useState } from 'react';



const ItemCount = ({ stock, initial, vista, onAdd}) => {

    const [ contador, setContador] = useState (initial);
    // const [ view, setView] = useState(vista);

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

        // useEffect(() => {
        //   setView(vista)
        
        //   return () => { };
        // }, [vista])
    return (
    <div style={{textAlign:'Center', marginTop:'20px', background:'#d9dee6',width:'50%'}}>
        
        
        
        <div style={{display:'flex', justifyContent:'center', margin:'2px', alignContent:'baseline'}}>
            <button  style={{border:'display', borderRadius: "2px", margin:'10px', background:'#fbd9aa'  }} 
                    onClick ={contador < stock ? Sumar : () => {}} >+</button>
            
            <h1> {contador}</h1>

            <button style={{border:'display', borderRadius: "2px", margin:'10px', background:'#fbd9aa' }} 
                    onClick ={contador > initial ? Restar : () => {}}>-</button>
        </div>
        <div>
            <button style={{borderRadius: "5px", background:'#efb059' }} onClick={() => onAdd(contador)}>Agregar al Carrito : {contador}</button>
        </div>
    </div>
  )
}

export default ItemCount