import React from 'react'
import { product } from '../config/Index'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailConteiner = () => {

  const {id} = useParams();     //useparams es un hook
  const [ producto, setProducto] = useState(null);
  
  const filtrar = product.find((prod) => prod.id === Number (id))
  console.log(filtrar)

  useEffect(() => { 
    const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(filtrar)
    }, 2000);
    });

    promesa
    .then((res) =>{
      setProducto(res)    //le estoy cambiando el estado
    })
    .then(() => console.log(producto))
    .catch((err) => console.log (err));
  
  }, [producto,filtrar]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto}/> : <h1>Cargando</h1>  }
    </div>
  )
}

export default ItemDetailConteiner
