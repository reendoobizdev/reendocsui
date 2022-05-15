import React, { useEffect, useState } from "react"
import axios from "axios"
export const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      setUsers(response.data)
    })
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  function deletePeople(id){
    console.log(id)
    // axios.delete(`https://localhost:7276/api/People/${id}`).then(res =>{
    //   location.reload();
    // });
  }
  return (
    <div>
      {users.length > 0 && (
        <div>
          {users.map(user => (
            <div key={user.id} style={{ backgroundColor: "#D0CCCC", width: "100%", marginTop: "10px" }} className="flex">
              <div className="flex-none w-14 h-14" >
                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." style={{ width: "35px" }} className="shadow rounded-full  align-middle border-none" />
              </div>
              <div className="flex-none w-14 h-14" style={{ width: "15%", marginLeft: "30px" }}>
                {user.name}
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "30%" }}>
                <p>Role</p>
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "30% " }}>
                <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full" onClick={()=>{deletePeople(user.id)}}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

