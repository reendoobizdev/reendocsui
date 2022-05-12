import React, { useEffect, useState } from "react"
import axios from "axios"
const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      return response.data
    })
    .then(data =>{
      setUsers(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

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
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full" >
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

export default UsingFetch