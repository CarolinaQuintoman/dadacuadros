import React from 'react'


const Eventos = () => {

    const handleChange = (e) => {    //me capta el valor del input
      const {value} = e.target
      console.log (value)
    }
    const handleClick = (e) => {
      alert('Se hizo Click')
    }
    // const handleKeyDown = (e) =>{  //el parametro e me muestra por consola lo que llega por el input
    //   const {key} = e
    //   console.log('key', key)

      
    // }




  return (
    <div>
        <form action=''>
          <label htmlFor='nombre'>Nombre</label>
          <input onChange={handleChange} type="text" id='nombre' />
          <button onClick={handleClick} type='submint'>enviar</button>
        </form>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Eventos