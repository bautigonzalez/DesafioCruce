import React from "react";
import "./Product.scss"

export default () => {
    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 product">
          <div className="row">
                <div className="col-5 col-sm-5 col-md-12 col-lg-12 col-xl-12 divImg">
                    <img src="4048.png"/>
                </div>
                <div className="col-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 divText">
                    <p className="pFunko">Funko</p>
                    <p className="pName">Funko Pop | Game Of Thrones - Daenerys 25</p>
                    <p className="pCuota">6 cuotas s/interés de</p>
                    <p className="bold price">$211,50</p>
                    <p>Final: <span className="bold">$2.390</span></p>
                    <button type="button" className="btn d-none d-md-block btnCart">
                        <img src="/images/cart.svg"/>
                    </button>
                </div>
          </div>
      </div>
    );
  };