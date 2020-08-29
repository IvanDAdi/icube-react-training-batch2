import React, { useState, Component, useEffect } from "react";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './components/Category';
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Register from "./pages/user/components/Register";
import Profile from "./pages/user/components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation(){
  return(
    <>
      <Router>
        <div className="header">
          <Link to="/" className="homeButton">SPA Ecommerce - Session 1</Link>
          <Link to="/Cart" className="cartButton">Cart</Link>
          <Link to="/Register" className="cartButton">Register</Link>
          <Link to="/Profile" className="cartButton">Profile</Link>
          
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Category">
              <Category/>
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
        </Switch>
      </Router>
    </>
  )
}

function App() {
  return (
    <>
    <Provider store={store}>
      <Navigation />
    </Provider>
    </>
  );
}

export default App;
