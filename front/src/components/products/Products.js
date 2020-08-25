import React from "react";
import Product from "../product/Product"
import "./Products.scss"

export default () => {
    return (
      <div id="products" className="container-fluid">
          <div className="row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
      </div>
    );
  };