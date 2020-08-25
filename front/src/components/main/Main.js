import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Products from "../products/Products";

export default () => {
    return (
      <div id="main">
          <Navbar/>
          <Header/>
          <Products/>
      </div>
    );
  };