// import logo from '../pages/people/logo.jpeg'; // with import
// import Department from './departmentService';
// import Position from './positionService';
// // import axios from 'axios';
// import React, { useRef , useState , useEffect } from 'react';
import axios from "axios"
// import { useRouter } from 'next/router';

export const getPeople = async () =>{
 const res = await axios.get("https://localhost:7276/api/People")
  return res.data;
}
export const addPeople = async (body) =>{
  await axios.post('https://localhost:7276/api/People',{
      id: body.id,
      departmentId : body.departmentId,
      positionId : body.positionId,
      userId : body.userId,
      fullName: body.fullName,
      email : body.email,
      phone : body.phone,
      photo : body.photo
  });
}
export const updatePeople = async (id , body) =>{
  await axios.put(`https://localhost:7276/api/People/updatePeople/${id}`,{
    id: body.id,
    departmentId : body.departmentId,
    positionId: body.positionId,
    userId: body.userId,
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    photo: body.photo,
  });
}
export const updatePeopleToUser = async (id) =>{
  const res = await axios.put(`https://localhost:7276/api/People/${id}`,{
    id: id
  });
  
}

export const getPeopleById = async (id) =>{
  const res = await axios.get(`https://localhost:7276/api/People/${id}`)
  return res.data
}