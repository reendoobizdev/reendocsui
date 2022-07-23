import logo from './logo.jpeg'; // with import
import React, { useRef , useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import {getDepartment} from '../../service/departmentService';
import {getPosition} from '../../service/positionService';
import { getPeopleById ,updatePeople } from '../../service/peopleService';
import Select from 'react-select'
export default function EditPeople() {
    const [departments, setDepartment] = useState([])
    const [positions, setPosition] = useState([])
    const [usersbyid, setUsersById] = useState([])

    const router = useRouter()
    const fetchData = async ()=>{
        const id = router.query.id;
        // console.log(id);
        // let id = window.location.search.split('=')[1];
        getPeopleById(id).then(response =>{
        //   console.log(response)
            setDataUri(response.photo)
            setUsersById(response);
          
        })

        getDepartment().then(response =>{
            setDepartment(response)
        })
        getPosition().then(response =>{
            setPosition(response)
        })
        
      }
      useEffect(() => {
        if(!router.isReady) return;
        fetchData()
      }, [router.isReady]);
    // console.log(router.query.id);
    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result)
        };
        reader.readAsDataURL(file);
        })
        const [peoples, setPeoples] = useState([]);
    const [dataUri, setDataUri] = useState('')
    const submitContact = async (event) => {
        event.preventDefault();
        let image = dataUri ? dataUri : null;
        
        const people = {
            id: router.query.id,
            departmentId: event.target.department.value,
            positionId: event.target.position.value,
            userId: usersbyid.userId,
            fullName: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            photo: image
        };
        console.log(people)
        updatePeople(router.query.id , people)
        router.replace('/people')

    };
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
    const mystyle = {
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10%",
        height: "100%",
        fontFamily: "Arial"
    }

    
    // const usersbyid = getPeopleById(2)
    return (
        <div style={mystyle}>
            <div>
      <form onSubmit={submitContact}>
                <div className="grid  md:grid-cols-2 gap-2">
                    <section>
                        <p style={bold}>Edit People </p>
                    </section>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div >
                        <div className="grid md:grid-cols-2 gap-2">
                            <div>
                                <p>Full Name </p>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" name="name" defaultValue={usersbyid.fullName} />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Department </p>
                                <select name='department' className="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                {
                                    departments.length > 0 && (
                                    departments.map(department => (
                                    <option key={department.id} selected={department.id == usersbyid.departmentId} value={department.id}>{department.name}</option>
                                     ))
        )}

                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div><p>Position</p>
                                <select name='position' className="bg-gray-200 block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    {
                                    positions.length > 0 && (
                                    positions.map(position => (
                                    <option key={position.id} selected={position.id == usersbyid.positionId} value={position.id} >{position.name}</option>
                                        ))
                                    )}
                                    {/* <option value={'test'}>test</option> */}
                                </select>
                            </div>

                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Email Address</p>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" name='email' defaultValue={usersbyid.email} />
                            </div>
                        </div>
                        <div className="grid  md:grid-cols-2 gap-2">
                            <div> <p>Phone No </p>
                                <input name='phone' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" defaultValue={usersbyid.phone}/>
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
        </div>
        // </div>
    )
}