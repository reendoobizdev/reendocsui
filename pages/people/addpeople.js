export default function AddPeople() {

    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10%",
        height: "100%",
        fontFamily: "Arial"
    }

    return (
        <div style={mystyle}>
            <form>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div>One of three columns</div>
                    <div>One of three columns</div>
                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div>One of three columns</div>
                    <div>One of three columns</div>
                </div>
                <div className="grid  md:grid-cols-2 gap-2">
                    <div>One of three columns</div>
                    <div>One of three columns</div>
                </div>
            </form>
        </div>
        // </div>
    )
}