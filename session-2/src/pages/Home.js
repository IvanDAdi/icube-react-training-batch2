import "../App.css";
import React from "react";
import Banner from "../banner.png";
import Category from '../components/Category';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BannerImage(){
  return <div className="BannerImage"><img src={Banner} alt="Banner" /></div>;
}

function ListCategories(){
  return (
    <>
    <hr />
    <div className="NewArrival">
      <Link to="/Category"><h3>New Arrival</h3></Link>
      <div className="NewListItem">
        <ul>
          <li> Kemeja</li>
          <li> Celana</li>
          <li> Sepatu</li>
          <li> Sandal</li>
        </ul>
      </div>
      <Link to="/Category"><h6>See More</h6></Link>
    </div>
    <hr />
    <div className="BestSeller">
      <Link to="/Category"><h3>Best Seller</h3></Link>
      <div className="BestListItem">
        <ul>
          <li> Kemeja</li>
          <li> Celana</li>
          <li> Sepatu</li>
          <li> Sandal</li>
        </ul>
      </div>
      <Link to="/Category"><h6>See More</h6></Link>
    </div>
    </>
  )
}

function HomeContent(){
  return (
    <>
    <BannerImage />
    <ListCategories />
    </>
  )
}

export default HomeContent;