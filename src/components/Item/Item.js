import React from "react";



const Item = ({ product }) => {
  return (
    
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="/">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"></div>
                </div>
                <img className="img-fluid" src={product.imagen} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{product.titulo}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {product.precio}
                </div>
                <a className="btn btn-primary btn-xl text-uppercase" href="/">
                  ver mas detalles
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Item;
