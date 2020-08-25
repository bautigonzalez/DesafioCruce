import React from "react";
import "./Product.scss"

export default ({product}) => {
    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 product">
          <div className="row">
                <div className="col-5 col-sm-5 col-md-12 col-lg-12 col-xl-12 divImg">
                    <img src={product.image}/>
                </div>
                <div className="col-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 divText">
                    <p className="pFunko">Funko</p>
                    <p className="pName">{product.name}</p>
                    <p className="pCuota">6 cuotas s/interés de</p>
                    <p className="bold price">{"$" + (product.price/6).toFixed(2).replace(".",",")}</p>
                    <p>Final: {product.discount > 0 ? 
                        (<>
                        <span className="offer">{"$"+product.price}</span>
                        <span className="newPrice">{" $"+(product.price - product.price*product.discount/100)}</span></>
                        ) : (
                        <span className="bold">{"$" + product.price}</span>)}
                    </p>
                    <button type="button" className="btn d-none d-md-block btnCart">
                        <img src="/images/cart.svg"/>
                    </button>
                </div>
          </div>
      </div>
    );
  };