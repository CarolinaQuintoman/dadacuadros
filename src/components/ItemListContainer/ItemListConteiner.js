import React from 'react';
import ItemList from '../itemList/ItemList';
import { product } from '../config/Index';
import { useEffect, useState } from 'react';


const ItemListConteiner = ({greeting}) => { 
    
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
    promesa
    .then((res) => {
      setProductos(res);
    })
    .then(() =>
      console.log(productos)
    )
    .catch((err) =>
      console.log(err));

    console.log(productos);
    }, [productos]);
  

  return (
    <div style={{color:'GrayText', fontSize:'2.5rem', textAlign:'center', marginTop:'150px', width:'100%', borderBottomStyle:'ridge'}}>
        <p>{greeting}</p>
      
      <ItemList productos={productos}/>

   </div>
  )
}

export default ItemListConteiner