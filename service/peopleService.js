import React, { useEffect, useState } from "react"
import axios from "axios"
export const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = ()=>{
    axios.get("https://localhost:7276/api/People")
    .then(response =>{
      setUsers(response.data)
    })
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  function setToUser(id){
    console.log(typeof id)
    const data = id;
    updatePeople(data);
  }
  const updatePeople = (id) =>{
    axios.put(`https://localhost:7276/api/People/${id}`,{
      id: id
    }).then(res =>{
      location.reload();
    });
  }
  return (
    <div>
      {users.length > 0 && (
        <div>
          {users.map(user => (
            <div key={user.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
              <div className="flex-none w-14 h-14" >
                <img src={user.photo ? user.photo : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"} alt="..." style={{ width: "35px" }} className="shadow rounded-full  align-middle border-none" />
              </div>
              <div className="flex-none w-14 h-14" style={{ width: "15%", marginLeft: "30px" }}>
                {user.fullName}
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "30%" }}>
                <p>Role</p>
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "30% " }}>
                {!user.userId ?  <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full" onClick={()=>{setToUser(user.id)}}>
                  Set To User
                </button> : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

