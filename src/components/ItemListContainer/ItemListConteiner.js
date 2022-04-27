import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListConteiner = ({greeting}) => {

  const onAdd = (cantidad) =>{
    
  }

  return (
    <div style={{color:'GrayText', fontSize:'2.5rem', textAlign:'center', marginTop:'150px', width:'100%', borderBottomStyle:'ridge'}}>
        <p>{greeting}</p>

      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListConteiner