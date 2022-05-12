import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {
  
  
  const [cantidad, setCantidad] = useState();
  let stock = 10;
  let initial = 0;
  const [visible, setVisible] = useState('bloqueo');
  const onAdd = (contador) =>{
    setCantidad(contador);
    setVisible('none');
  };
  useEffect(() => {
    const pedir = new Promise ((resolve, reject) =>{
      setTimeout(() => {
        resolve(onAdd);
      }, 0);
    });
    pedir
      .then((res) =>
      cantidad > 0 ? console.log('Sus agregaron' + cantidad + 'productos'): "",
      (err) =>{
        console.log("error", err)
      }
      )
  
    return () => {}
  }, [cantidad])
  
  return (
    
    <div className="col-lg-8">
                <div className="modal-body">
                
                                   
                  <img
                    className="img-fluid d-block mx-auto class="
                    src={producto.imagen}
                    alt=""
                  />
                  <h2 className="text-uppercase">{producto.titulo}</h2>
                  <p className="item-intro text-muted">
                    {producto.precio}
                  </p>
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Threads
                    </li>
                    <li>
                      <strong>Categoría:</strong>
                      Marcos
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-xmark me-1"></i>
                    comprar
                  </button>
                  <ItemCount
                    stock={stock}
                    visible={visible}
                    initial={initial} 
                    onAdd={onAdd} />
                  <>
                    {visible === 'none' ? (
                      <React.Fragment>
                        <button className='btn btn-outline-info' style={{with:'20px', background:'#fbd9aa', borderRadius: "5px", marginTop:'5px'}}>
                          <NavLink to='/Cart' style={{}}>
                            Finalizar Compra {cantidad} productos
                          </NavLink>
                        </button>
                      </React.Fragment>
                    ) : (
                      ''
                    )}
                  </>
                </div>
    </div>
            
    
  )
}

export default ItemDetail