import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink , useParams} from "react-router-dom";
import "../App.css";

var item = [

    {
        id: 1,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "new",
        name: "Item1",
        price: "Rp.30.000"
    },
    {
        id: 2,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "new",
        name: "Item2",
        price: "Rp.30.000"
    },
    {
        id: 3,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "new",
        name: "Item3",
        price: "Rp.30.000"
    },
    {
        id: 4,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "new",
        name: "Item4",
        price: "Rp.30.000"
    },
    {
        id: 5,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "old",
        name: "Item5",
        price: "Rp.30.000"
    },
    {
        id: 6,
        img: "https://cdn.amphenol-icc.com/media/wysiwyg/image_mainpage/waterproof-usb-type-c-01.jpg",
        status: "old",
        name: "Item6",
        price: "Rp.30.000"
    }

];

function CategoryList(){
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>(
                        <Link to={`/Category/${i.id}`}>
                            <img src={i.img} className="img_small"/>
                            <h4>{i.name}</h4>
                            <p>{i.status}</p>
                            <p>{i.price}</p>
                            <button>View Details</button>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

function CategoryItem(){
    var { Id } = useParams();
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>
                        {
                            if(i.id == Id){
                                return (
                                    <div>
                                        <img src={i.img} className="img_small"/>
                                        <h4>{i.name}</h4>
                                        <p>{i.status}</p>
                                        <p>{i.price}</p>
                                        <p>{i.discount}</p>
                                        <button>
                                            <Link to="/Category">Back to Category</Link>
                                        </button>
                                        <button>
                                            <Link to={`/PDP?id=${i.id}`}>View Details</Link>
                                        </button>
                                    </div>
                                );
                            }
                        }
                    )
                }
            </div>
        </>
    );
}

function Category(){
    return(
        <>
            <Switch>
                <Route exact path="/Category">
                    <CategoryList />
                </Route>
                <Route path={`/Category/:Id`}>
                    <CategoryItem />
                </Route>
            </Switch>    
        </>
    );
}

export default Category;