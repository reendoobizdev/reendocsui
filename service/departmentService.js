import React, { useEffect, useState } from "react"

const Department = () => {
    const [department, setDepartment] = useState([])

    const fetchData = () => {
        fetch("https://localhost:7276/api/Department")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setDepartment(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        department.length > 0 && (
            department.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))
        )
    )
}

export default Department