import React from "react";
import { NavLink } from "react-router-dom";




const Item = ({ 
  id, imagen, titulo, precio, descripcion, categoria
 }) => {
  return (
    
    <section>
      <div className="container">
        <div >
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="/">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src={imagen} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{titulo}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {precio}
                </div>
                <NavLink to={`/detail/${id}`} className="btn btn-primary btn-xl text-uppercase" href="/">
                  ver mas detalles
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
