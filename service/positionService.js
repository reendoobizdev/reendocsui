import React, { useEffect, useState } from "react"

const Position = () => {
    const [position, setPosition] = useState([])

    const fetchData = () => {
        fetch("https://localhost:7276/api/Position")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosition(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        position.length > 0 && (
            position.map(user => (
                <option>{user.name}</option>
            ))
        )
    )
}

export default Position