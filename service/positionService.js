import React, { useEffect, useState } from "react"
import axios from "axios"

export const getPosition = async () =>{
    const res = await  axios.get("https://localhost:7276/api/Position")
    return res.data    
}