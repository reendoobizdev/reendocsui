import React , { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPosition } from '../../service/positionService';
// import axios from 'axios';
// import Cleave from 'cleave.js/react';
export default function Department() {

    const router = useRouter();
    const [positions, setPosition] = useState([])
    const fetchData = ()=>{
        getPosition().then(function (res) {
            console.log(res);
            setPosition(res)
        })
      }
    

      useEffect(() => {
        fetchData()
      }, [])

      
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
    return (
        <div>

            <div style={mystyle}>
                
                <div>
      {positions.length > 0 && (
        <div>
          {positions.map(position => (
            <div key={position.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
              <div className="flex-none w-10 " >
                {position.name}
              
              </div>
              <div className="flex-auto w-64 " >
              
              </div>
              <div className="flex-auto w-20 " style={{ marginLeft: "150px" }} >
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 py-2 px-4 " onClick={()=>{editPeople(user.id)}}>
                  Edit
                </button>
             
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

            </div>
        </div>
    )

}
