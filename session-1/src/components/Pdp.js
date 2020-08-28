import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink , useParams, useLocation} from "react-router-dom";
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

function PDPList() {
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


function PDPItem(){
    const [count, setCount] = useState(0);

    var query = new URLSearchParams(useLocation().search);
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>
                        {
                            if(i.id == query.get("id")){
                                return (
                                    <div>
                                        <img src={i.img} className="img_small"/>
                                        <h4>{i.name}</h4>
                                        <p>{i.price}</p>
                                        <p>{i.desc}</p>
                                        <p>{i.desc}</p>
                                        <div>
                                            <div>
                                                <button onClick={() => setCount(count + 1)}> 
                                                    +
                                                </button>
                                            </div>
                                            <div>
                                                <input type="text" min="0" value={count}/>
                                            </div>
                                            <div>
                                                <button onClick={() =>  
                                                    {if(count> 0) {
                                                        setCount(count - 1)
                                                    }}
                                                }> - </button>
                                            </div>
                                        </div>
                                        <button>
                                            <Link to={`/Cart`}>Add to Cart</Link>
                                        </button>
                                        <button>
                                            <Link to="/Category">Back to Category</Link>
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


function PDP(){
    var query = new URLSearchParams(useLocation().search);
    var isQueryExist = query && query.get("id");
    return(
        <>
            {!isQueryExist && (
                <PDPList />
            )}
            {isQueryExist && (
                <PDPItem />
            )}
        </>
    );
}

export default PDP;