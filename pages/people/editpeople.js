
import React, { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPeopleById } from '../../service/peopleService';
export default function AddPeople() {
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10%",
        height: "100%",
        fontFamily: "Arial"
    }

    
    const usersbyid = getPeopleById(2)
    return (
        <div style={mystyle}>
            {usersbyid}
        </div>
        // </div>
    )
}