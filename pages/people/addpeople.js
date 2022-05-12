import logo from './logo.jpeg'; // with import
import Department from '../../service/departmentService';
import Position from '../../service/positionService';
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
    const photo = {
        width: "200px",
        height: "250px"
    }
    // console.log(logo)
    const input = {
        width: "50%"
    }
    const department = Department()
    const position = Position()
    return (
        <div style={mystyle}>
            <form>
                <div className="grid  md:grid-cols-2 gap-2">
                    <section>
                        <p style={bold}>Add People </p>
                    </section>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div >
                        <div className="grid md:grid-cols-2 gap-2">
                            <div>
                                <p>Full Name </p>
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Department </p>
                                <select class="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    {department}
                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Position</p>
                                <select class="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    {position}
                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Email Address</p>
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Phone No </p>
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>User Role </p>
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={logo.src} style={photo} />
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Remove
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "10px", marginTop: "10px" }}>
                            Upload Photo
                        </button>
                    </div>
                </div>

            </form>
        </div>
        // </div>
    )
}