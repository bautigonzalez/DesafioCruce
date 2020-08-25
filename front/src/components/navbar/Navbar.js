import React from "react";
import { Link } from "react-router-dom"

export default () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link className="navbar-brand" to="/">
                <img src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo"/>
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to={"/catalogo"}>Catálogo</Link>
                </li>
            </ul>
        </nav>
    );
  };