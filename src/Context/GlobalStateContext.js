import React, { createContext, useState } from 'react';

export const GlobalContext = createContext('') //aca va un valor por defecto

const GlobalStateContext = ({children}) => {

   const [carrito, setCarrito] = useState([])

   const AddToCard = (producto) =>{
     setCarrito([...carrito,producto])
   }

  return (
    <GlobalContext.Provider value={{carrito, AddToCard}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext