import React from "react";
import "./Header.scss"

export default () => {
    return (
        <div id="header">
            <div className="container-fluid">
                <img id="banner" src="/images/banner.png" alt="banner"/> 
            </div>
            <div className="container-fluid options">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 base route">
                        <span className="gris">Inicio / Juguetes / </span><strong>Funko pop</strong>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 center filtro base d-none d-md-block">
                        Filtrar <img id="drop" src="/images/drop.svg"/>
                    </div>
                    <div className="col-12 col-sm-12 d-block d-md-none center divMobile">
                        <div className="filtroMobile">
                            <span><img src="/images/filter.svg"/> Filtrar</span>
                            <span><img id="drop" src="/images/rightdrop.svg"/></span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 right divMobile">
                        <select id="select" className="gris">
                            <option value="" disabled selected>Ordenar por</option>
                            <option>Mayor valor</option>
                            <option>Mayor menor</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
  };