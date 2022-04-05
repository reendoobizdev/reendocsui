import React from 'react';
import ReactDOM from 'react-dom';
 
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
const bold={
    fontWeight: "bold"
}
    
    return (
        <div style={mystyle}>
            <section>
        <p style={bold}>Add People </p>
    </section>
    <br></br>

    <section>
        <p>Full Name </p>
        <input class="input-0" />
    </section>

    <section>
        <p>Department </p>
        <input class="input-3" />
    </section>

    <section>
        <p>Position</p>
        <input class="input-4 right" />
    </section>

    <section>
        <p>Email Address</p>
        <input class="input-1 right" />
    </section>

    <section>
        <p>Phone No </p>
        <input class="input-5" />
    </section>

    <section>
        <p>User Role </p>
        <input class="input-6" />
    </section>

    </div>
    )

}
