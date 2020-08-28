import React, { useState, Component, useEffect } from "react";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './components/Category';
import PDP from './components/Pdp';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation(){
  return(
    <>
      <Router>
        <div className="header">
          <Link to="/" className="homeButton">
            SPA Ecommerce - Session 1
          </Link>
          <Link to="/Cart" className="cartButton">Cart</Link>
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Category">
              <Category/>
            </Route>
            <Route path="/Pdp">
              <PDP/>
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
        </Switch>
      </Router>
    </>
  )
}

function App() {
  return (
    <>
    <Navigation />
    </>
  );
}

export default App;
