import React , { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';

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
      function routeUser(){
        // console.log(typeof id)
         router.push(`/people/user`);
        
      }



      useEffect(() => {
        fetchData()
      }, [])

      const editPeople = async (id) =>{
        console.log(id);
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
                    <div onClick={()=>{routeUser()}} className="flex-none w-14 h-14" style={{ width: "15%" }}>
                        <div>User</div>
                        {/* <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." style={{ width: "35px" }} class="shadow rounded-full  align-middle border-none" /> */}
                    </div>
                    <div className="flex-none w-14 h-14" style={{ width: "15%" , backgroundColor: "#D0CCCC", marginLeft: "30px" }}>
                        {/* {user.name} */}
                        <div>People</div>
                    </div>
                </div>
                <div>
      {users.length > 0 && (
        <div>
          {users.map(user => (
            <div key={user.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
              <div className="flex-none w-14 " >
                <img src={user.photo ? user.photo : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"} alt="..." style={{ width: "35px" }} className="shadow rounded-full  align-middle border-none" />
              </div>
              <div className="flex-auto w-14 " >
                {user.fullName}
              </div>
              <div className="flex-auto w-14 " >
                <p>{user.name}</p>
              </div>
              <div className="flex-auto w-24 " >
              
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-16 py-2 px-4 " onClick={()=>{editPeople(user.id)}}>
                  Edit
                </button>
                
              </div>
              <div className="flex-auto " >
              {!user.userId ?  <button  className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 " onClick={()=>{setToUser(user.id)}}>
                  Set User
                </button> : null}
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
