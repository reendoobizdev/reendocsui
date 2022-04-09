import React from 'react';
import ReactDOM from 'react-dom';
import UsingFetch from '../../service/peopleService';
import axios from 'axios';
import Cleave from 'cleave.js/react';
export default function People() {
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10%",
        height: "100%",
        fontFamily: "Arial"
    }
    const bold = {
        fontWeight: "bold",
        fontSize: "25px"
    }

    const users = UsingFetch()
    
    
    return (
        <div style={mystyle}>
           {users}

        </div>
    )

}
