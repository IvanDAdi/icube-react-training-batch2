import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux';

function Profile(){
    const data = useSelector((state) => state.user);

    return(
        <>
            {
                data.user.map((val,key)=>(
                    <>
                        <div key={key}>
                            <p>Name: {val.fullname}</p>
                            <p>Email: {val.email}</p>
                            <p>Password: {val.password}</p>
                            <p>Phone Number: {val.phoneNumber}</p>
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default Profile;