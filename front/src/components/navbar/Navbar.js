import React from "react";
import { Link } from "react-router-dom"

export default () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo"/>
            </Link>
        </nav>
    );
  };