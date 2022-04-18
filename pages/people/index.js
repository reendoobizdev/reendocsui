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
        <div>

            <div style={mystyle}>
                <div className='flex' style={{marginBottom : "-5px"}} >
                    <div className="flex-none w-14 h-14" style={{ width: "15%", backgroundColor: "#D0CCCC" }}>
                        <div>User</div>
                        {/* <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." style={{ width: "35px" }} class="shadow rounded-full  align-middle border-none" /> */}
                    </div>
                    <div className="flex-none w-14 h-14" style={{ width: "15%", marginLeft: "30px" }}>
                        {/* {user.name} */}
                        <div>People</div>
                    </div>
                </div>
                {users}

            </div>
        </div>
    )

}
