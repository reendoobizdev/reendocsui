import React , { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDepartment } from '../../service/departmentService';
// import axios from 'axios';
// import Cleave from 'cleave.js/react';
export default function Department() {

    const router = useRouter();
    const [departments, setDepartment] = useState([])
    const fetchData = ()=>{
        getDepartment().then(function (res) {
            console.log(res);
            setDepartment(res)
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
      {departments.length > 0 && (
        <div>
          {departments.map(department => (
            <div key={department.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
              <div className="flex-none w-10 " >
                {department.name}
              
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
