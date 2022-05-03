import React, { useState,useEffect } from 'react';
import Item from '../Item/Item';
import { getProduct } from '../ItemDetailConteiner/ItemDetailConteiner';


const ItemList = () => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProduct()
        .then((result) => setListProduct(result))
        .catch((error) => console.log('error',error))
    }, []);
    return (
      <>
         {listProduct.map((product) =>{
            return <Item key={product.id} product={product} />
         }
         )} 

                
      </>
    
    )
  }

export default ItemList