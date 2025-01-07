import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function EditProfile({users,setUsers}) {

  let params = useParams()

  let [pic,setPic] = useState()
  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [mobile,setMobile] = useState()
  let [city,setCity] = useState()
  let [fullAddress,setFullAddress] = useState()
  let [pincode,setPincode] = useState()
  let [batch,setBatch] = useState()

  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...users]
    newArray.splice(params.id,1,{pic,name,email,mobile,city,fullAddress,pincode,batch})
    setUsers(newArray)
    navigate(`/profile/${params.id}`)
  }

  useEffect(()=> {
    if(params.id < users.length)
    {
      setPic(users[params.id].pic)
      setName(users[params.id].name)
      setEmail(users[params.id].email)
      setMobile(users[params.id].mobile)
      setCity(users[params.id].city)
      setFullAddress(users[params.id].fullAddress)
      setPincode(users[params.id].pincode)
      setBatch(users[params.id].batch)
    }
    else
    {
      alert("Invalid User Id")
      navigate("/profile")
    }
  },[navigate,params.id,users])

  return <div className='container'>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h1 mb-0 text-gray-800">Edit Profile</h1>
            </div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" value={city} onChange={(e)=>setCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={fullAddress} onChange={(e)=>setFullAddress(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default EditProfile