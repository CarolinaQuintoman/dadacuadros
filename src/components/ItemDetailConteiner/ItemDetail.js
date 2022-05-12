import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {
  
  const onAdd = (cantidad) =>{
    
  }
    
  return (
    
    <div className="col-lg-8">
                <div className="modal-body">
                
                  <h2 className="text-uppercase">{producto.titulo}</h2>
                  <p className="item-intro text-muted">
                    {producto.precio}
                  </p>
                  <img
                    className="img-fluid d-block mx-auto class="
                    src={producto.imagen}
                    alt=""
                  />
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
                      <strong>Category:</strong>
                      Illustration
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-xmark me-1"></i>
                    Close Project
                  </button>
                  <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
    </div>
            
    
  )
}

export default ItemDetail