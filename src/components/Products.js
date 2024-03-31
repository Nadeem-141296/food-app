import React from "react";
import { product } from "../Data";

const products = () => {
  return (
    <section className="products" id="product">
      <h1 className="heading">
        Our <span>Products</span>{" "}
      </h1>
      <div className="box-container">
        {product.map((item, index) => (
          <div className="box" key={index}>
            <div className="icons">
              <a href="#/" className="fas fa-shopping-cart" aria-label="Add to Cart"></a>
              <a href="#/" className="fas fa-heart" aria-label="Add to Favorites"></a>
              <a href="#/" className="fas fa-eye" aria-label="View Details"></a>
            </div>
            <div className="image">
              <img src={item.img} alt="" />
              <div className="content">
                <h3>Fresh Coffee</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default products;
