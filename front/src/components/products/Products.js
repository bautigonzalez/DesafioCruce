import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { fetchProducts } from "../../redux/action-creators/product";
import "./Products.scss";

export default () => {
  const dispatch = useDispatch()

  const products = useSelector(store => store.product.products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
      <div id="products" className="container-fluid">
          <div className="row">
            {products.length ? 
            (products.map(product=><Product product={product} key={product._id}/>)
            ):("No hay productos para mostrar")}
          </div>
          <div id="pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                    <img src="/images/left.svg"/>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link selectedPage" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item"><a className="page-link" href="#">8</a></li>
                <li className="page-item">
                  <a className="page-link" href="#"><img src="/images/right.svg"/></a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    );
  };