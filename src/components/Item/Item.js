import React from "react";
import { Link } from "react-router-dom";




const Item = ({ 
  id, imagen, titulo, precio, descripcion, categoria
 }) => {
  return (
    
    <section>
      <div className="container">
        <div >
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src={imagen} alt="..." />
              
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{titulo}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {precio}
                </div>
                <Link to={`/detail/${id}`} className="btn btn-primary btn-xl text-uppercase" href="/">
                  ver mas detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
