import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function EditProfile({users,setUsers}) {

  let params = useParams()

  let [pic] = useState(users[params.id].pic)
  let [name,setName] = useState(users[params.id].name)
  let [email,setEmail] = useState(users[params.id].email)
  let [mobile,setMobile] = useState(users[params.id].mobile)
  let [city,setCity] = useState(users[params.id].city)
  let [fullAddress,setFullAddress] = useState(users[params.id].fullAddress)
  let [pincode,setPincode] = useState(users[params.id].pincode)
  let [batch,setBatch] = useState(users[params.id].batch)
  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...users]
    newArray.splice(params.id,1,{pic,name,email,mobile,city,fullAddress,pincode,batch})
    setUsers(newArray)
    navigate(`/profile/${params.id}`)
  }

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