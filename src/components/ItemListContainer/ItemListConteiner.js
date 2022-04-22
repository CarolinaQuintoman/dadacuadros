import React from 'react'

const ItemListConteiner = ({greeting}) => {
  return (
    <div style={{color:'GrayText', fontSize:'2.5rem', textAlign:'center', marginTop:'150px', width:'100%', borderBottomStyle:'ridge'}}>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListConteiner