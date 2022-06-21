import logo from '../pages/people/logo.jpeg'; // with import
import Department from './departmentService';
import Position from './positionService';
// import axios from 'axios';
import React, { useRef , useState , useEffect } from 'react';
import axios from "axios"
import { useRouter } from 'next/router';

export const UsingFetch = () => {
  const router = useRouter();
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
    // console.log(typeof id)
    const data = id;
    updatePeople(data);
  }
  const updatePeople = async (id) =>{
    const res = await axios.put(`https://localhost:7276/api/People/${id}`,{
      id: id
    });
  }
  const editPeople = async (id) =>{
    console.log(id);
   await router.push(`/people/editpeople?id=${id}`);
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
                <p>{user.name}</p>
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "15% " }}>
              <div className="flex-none w-14 h-14" >
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-12 py-3 px-6 " onClick={()=>{editPeople(user.id)}}>
                  Edit
                </button>
              </div>
              <div className="flex-none w-14 h-14" style={{ marginLeft: "100% " , marginTop: "-50px"}} >
                {!user.userId ?  <button  className="bg-blue-500 hover:bg-blue-700 text-white w-14 font-bold py-3 px-6 " onClick={()=>{setToUser(user.id)}}>
                  Set
                </button> : null}
                
              </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export const getPeopleById = (id) =>{
  const [usersbyid, setUsersById] = useState([])
  
  const fetchData = async ()=>{
    // let id = window.location.search.split('=')[1];
    console.log(id);
    axios.get(`https://localhost:7276/api/People/${2}`)
    .then(response =>{
      console.log(response)
      setUsersById(response.data)
    })
    
  }

  useEffect(() => {
    fetchData()
  }, []);
  const router = useRouter();
    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result)
        };
        reader.readAsDataURL(file);
        })
        const [peoples, setPeoples] = useState([]);
    const [dataUri, setDataUri] = useState('')
    

    const bold = {
        fontWeight: "bold",
        fontSize: "25px"
    }
    const photo = {
        width: "200px",
        height: "250px",
        objectFit: "cover"
    }
    // console.log(logo)
    const input = {
        width: "50%"
    }
    
    const department = Department()
    const position = Position()
    const submitContact = async (event) => {
        event.preventDefault();
        let image = dataUri ? dataUri : null;
        
        const people = {
            id: 0,
            departmentId: event.target.department.value,
            positionId: event.target.position.value,
            userId: null,
            fullName: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            photo: image
        };
        // console.log('terupload');
        await addPeople(people);
        router.push(`/people`);
        // console.log(dataUri.replace('data:image/png;base64,',''))\
            // (await axios.post("https://localhost:7276/people", { people }))
            // .then(res => {
            //     console.log(res);
            // })

    };
    const addPeople = async (body) =>{
        const response = await axios.post('https://localhost:7276/api/People',{
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
    const inputFile = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };
    const onChange = (file) => {
    
        if(!file) {
          setDataUri(null);
          return;
        }
    
        fileToDataUri(file)
          .then(dataUri => {
            setDataUri(dataUri)
          })
        
      };
      
    const remove = ()=>{
        setDataUri(null);
    }

  return (
    <div>
      <form onSubmit={submitContact}>
                <div className="grid  md:grid-cols-2 gap-2">
                    <section>
                        <p style={bold}>Add People </p>
                    </section>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div >
                        <div className="grid md:grid-cols-2 gap-2">
                            <div>
                                <p>Full Name </p>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" name="name" value={usersbyid.fullName} />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Department </p>
                                <select name='department' className="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    {department}
                                    {/* <option value={'test'}>test</option> */}

                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Position</p>
                                <select name='position' className="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    {position}
                                    {/* <option value={'test'}>test</option> */}
                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Email Address</p>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" name='email' />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Phone No </p>
                                <input name='phone' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>User Role </p>
                                <input name='role' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img name="photo" src={dataUri ? dataUri :logo.src} style={photo} />
                        <button type='button' onClick={remove} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Remove
                        </button>
                        <input name='photo' onChange={(event) => onChange(event.target.files[0] || null)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="file" accept="image/*" ref={inputFile} style={{ display: 'none' }} />
                        <button type="button" onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "10px", marginTop: "10px" }}>
                            Upload Photo
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div>
                        <br></br>
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </form>
    </div>
  )
}