import React , { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';

import ReactDOM from 'react-dom';
import {getPeople , updatePeopleToUser } from '../../service/peopleService';
// import axios from 'axios';
// import Cleave from 'cleave.js/react';
export default function People() {

    const router = useRouter();
    const [users, setUsers] = useState([])
    const fetchData = ()=>{
        getPeople().then(function (res) {
            console.log(res);
            setUsers(res)
        })
      }
    function setToUser(id){
        // console.log(typeof id)
        const data = id;
        updatePeopleToUser(data).then(res =>{
            fetchData();
        })
      }
      function routePeople(){
        // console.log(typeof id)
        router.push(`/people`);

      }



      useEffect(() => {
        fetchData()
      }, [])

      const editPeople = async (id) =>{

       await router.push(`/people/editpeople?id=${id}`);
      }


    
    
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



    

    // const deletes = deletePeople(id)
    return (
        <div>

            <div style={mystyle}>
                <div className='flex' style={{marginBottom : "-5px"}} >
                    <div  className="flex-none w-14 h-14" style={{ width: "15%" , backgroundColor: "#D0CCCC" }}>
                        <div>User</div>
                        {/* <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." style={{ width: "35px" }} class="shadow rounded-full  align-middle border-none" /> */}
                    </div>
                    <div onClick={()=>{routePeople()}} className="flex-none w-14 h-14" style={{ width: "15%" , marginLeft: "30px" }}>
                        {/* {user.name} */}
                        <div>People</div>
                    </div>
                </div>
                <div>
      {users.length > 0 && (
        <div>
          {users.filter(x => x.userId != null).map(user => (
            <div key={user.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
            <div className="flex-none w-14 h-14" >
              <img src={user.photo ? user.photo : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"} alt="..." style={{ width: "35px" }} className="shadow rounded-full  align-middle border-none" />
            </div>
            <div className="flex-none w-14 h-14" style={{ width: "15%", marginLeft: "30px" }}>
              {user.fullName}
            </div>
            <div className="flex-none w-14 h-14" style={{ marginLeft: "30%" }}>
              <p>{user.name}</p>
            </div>
            <div className="flex-none w-14 h-14" style={{ marginLeft: "15% " }}>
            <div className="flex-none w-14 h-14" >
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-12 py-3 px-6 " onClick={()=>{editPeople(user.id)}}>
                Edit
              </button>
            </div>
            <div className="flex-none w-14 h-14" style={{ marginLeft: "100% " , marginTop: "-50px"}} >
              {!user.userId ?  <button  className="bg-blue-500 hover:bg-blue-700 text-white w-14 font-bold py-3 px-6 " onClick={()=>{setToUser(user.id)}}>
                Set
              </button> : null}
              
            </div>
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
