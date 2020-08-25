import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Products from "../products/Products";
import Catalog from "../catalog/Catalog";

export default () => {
    return (
      <div id="main">
          <Navbar/>
          <Switch>
            <Route path="/catalogo" component={Catalog}/>
            <Route exact path="/" render={()=>(<><Header/><Products/></>)}/>
          </Switch>
      </div>
    );
  };