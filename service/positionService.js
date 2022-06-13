import React, { useEffect, useState } from "react"
import axios from "axios"

const Position = () => {
    const [positions, setPosition] = useState([])

    const fetchData = ()=>{
        axios.get("https://localhost:7276/api/Position")
        .then(response =>{
            setPosition(response.data)
        })
        
      }
    
      useEffect(() => {
        fetchData()
      }, [])

    return (
        positions.length > 0 && (
            positions.map(position => (
                <option key={position.id} value={position.id} >{position.name}</option>
            ))
        )
    )
}

export default Position