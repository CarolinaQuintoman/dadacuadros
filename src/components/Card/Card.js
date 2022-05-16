import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContext'
import imgPrueba from '../../assets/28042022.jpg'

const Card = () => {  
  const {carrito} = useContext(GlobalContext)  //adentro del context debo poner el nombre delcontext que quiero consumir
  
  return (
     
    <>
        { carrito.length > 0 ? carrito.map((producto, index) => (
           <div className="card" key={index}>
           <div className="row">
               <div className="col-md-8 cart">
                   <div className="title">
                       <div className="row">
                           <div className="col"><h4><b>Bienvenido a su Carrito de compras</b></h4></div>
                           <div className="col align-self-center text-right text-muted">3 items</div>
                       </div>
                   </div>    
                   <div className="row border-top border-bottom">
                       <div className="row main align-items-center">
                           <div className="col-2">
                             <img className="img-fluid" src={imgPrueba} alt="..."/></div>
                           <div className="col">
                               <div className="row text-muted">id del producto</div>
                               <div className="row">nombre del producto</div>
                           </div>
                           <div className="col">
                               <p>-</p>
                               <p className="border">1</p>
                               <p>+</p>
                               <button>Eliminar</button>
                           </div>
                           <div className="col">precio <span className="close">&#10005;</span></div>
                       </div>
                   </div>
                   
                   
                   <div className="back-to-shop"><a href="/">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
               </div>
               <div className="col-md-4 summary">
                   <div><h5><b>Summary</b></h5></div>
                   <hr>
                   <div className="row">
                       <div className="col" style={{}}>ITEMS 3</div>
                       <div className="col text-right">&euro; 132.00</div>
                   </div>
                   </hr>
                   <form>
                       <p>SHIPPING</p>
                       <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                       <p>GIVE CODE</p>
                       <input id="code" placeholder="Enter your code"/>
                   </form>
                   <div className="row" style={{}}>
                       <div className="col">TOTAL PRICE</div>
                       <div className="col text-right">&euro; 137.00</div>
                   </div>
                   <button className="btn">CHECKOUT</button>
               </div>
           </div>
           
       </div>
         )) : 
         <>
         
         </>}

      
    </>
  
  )
}

export default Card