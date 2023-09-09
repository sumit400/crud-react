import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Read = () => {

    const [data, setdata] = useState([  ])

    function getData(){
        axios.get("https://64eb92abe51e1e82c5777ed0.mockapi.io/crud")
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)

        })
    }

    function handleDelete(id){
        axios.delete(
            `https://64eb92abe51e1e82c5777ed0.mockapi.io/crud/${id}`
            ).then(()=>{
                getData()
            })
    }

    const setToLocalStorage = (id,name,email)=> {
          localStorage.setItem("id",id)
          localStorage.setItem("name",name)
          localStorage.setItem("email",email)
    }

    useEffect(()=>{
        getData()
    },[])

   
  return (
    <>
   <div className='d-flex justify-content-between m-2'> 
  <h2>Read Operations</h2>
  <Link to="">
  <button className='btn btn-success'>Show Data</button>
  </Link>

  </div>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>

  {
    data.map((eachData)=> {
        return (
            <>
 <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name ? eachData.name : "Null"}</td>
      <td>{eachData.email ? eachData.email : "Null"}</td>
      <td>
        <Link to="/update">
        <button className='btn-success' onClick={()=> 
        
        setToLocalStorage(
        eachData.id,
        eachData.name,
        eachData.email,
        )}>Edit</button>
        </Link>

        
        </td>
      <td><button className='btn-danger' onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
    </tr>
  </tbody>
            </>
        )
    })
 
  }
</table>
        
        
    </>
  )
}

export default Read