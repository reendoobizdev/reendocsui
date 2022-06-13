import React, { useEffect, useState } from "react"
import axios from "axios"

const Department = () => {
    const [departments, setDepartment] = useState([])

    const fetchData = ()=>{
        axios.get("https://localhost:7276/api/Department")
        .then(response =>{
            setDepartment(response.data)
        })
        
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
    // const fetchData = () => {
    //     fetch("https://localhost:7276/api/Department")
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setDepartment(data)
    //         })
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        departments.length > 0 && (
            departments.map(department => (
                <option key={department.id} value={department.id}>{department.name}</option>
            ))
        )
    )
}

export default Department