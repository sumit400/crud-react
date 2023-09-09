import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState("0");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const navigate = useNavigate();

    useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    },[])

    const handleUpdate = (e)=> {
        e.preventDefault();
        console.log("Id...",id)
        axios.put(`https://64eb92abe51e1e82c5777ed0.mockapi.io/crud/${id}`,
        {
            name: name, 
            email: email,
        }
        ).then(()=>{
           navigate("/read")
        })
    }
  return (
    <>
    <h2>Update</h2>
    <form>
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" value={name} className="form-control" 
    
    onChange={(e)=> setName(e.target.value)}
    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" value={email} className="form-control"  aria-describedby="emailHelp"
    
    onChange={(e)=> setEmail(e.target.value)}
    
    />
  </div>
  <button type="submit" className="btn btn-primary"
   onClick={handleUpdate}
   >Update</button>
</form>

    </>
  )
}

export default Update