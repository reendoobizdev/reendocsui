import logo from './logo.jpeg'; // with import
export default function AddPeople() {
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
    // console.log(logo)
    return (
        <div style={mystyle}>
            <form>
                <div className="grid  md:grid-cols-2 gap-2">
                    <section>
                        <p style={bold}>Add People </p>
                    </section>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div>
                        <p>Full Name </p>
                        <input class="input-0" />
                    </div>
                    <div>
                        <p>Photo </p>
                        <img src={logo.src} />
                    </div>
                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div><p>Department </p>
                        <input class="input-3" /></div>

                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div><p>Position</p>
                        <input class="input-4 right" /></div>

                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div> <p>Email Address</p>
                        <input class="input-1 right" /></div>
                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div> <p>Phone No </p>
                        <input class="input-5" /></div>
                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div> <p>User Role </p>
                        <input class="input-6" /></div>
                </div>
            </form>
        </div>
        // </div>
    )
}