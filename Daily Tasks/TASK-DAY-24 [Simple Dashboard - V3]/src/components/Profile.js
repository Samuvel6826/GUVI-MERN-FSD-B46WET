import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Profile({users}) {

  let params = useParams()
  
  let [pic] = useState(users[params.id].pic)
  let [name] = useState(users[params.id].name)
  let [email] = useState(users[params.id].email)
  let [mobile] = useState(users[params.id].mobile)
  let [city] = useState(users[params.id].city)
  let [fullAddress] = useState(users[params.id].fullAddress)
  let [pincode] = useState(users[params.id].pincode)
  let [batch] = useState(users[params.id].batch)
  let navigate = useNavigate()

  return <div className='container'>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h1 mb-0 text-gray-800">Profile Section</h1>
             <i class="fa-solid fa-pen-to-square" style={{color: "#4e73df",fontSize:"1.5rem"}} onClick={()=>{navigate(`/edit-profile/${params.id}`)}}> Edit</i>
          </div>

        
  <div style={{display:"flex", flexDirection:"row-reverse", justifyContent:"center", alignItems:"center"}}>

 <img src={pic} style={{height:"475px", width:"400px", marginLeft:"50px"}} alt='dp'></img>

 <Form style={{width:"60%"}}>
 <Form.Group className="mb-3">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={name} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter Email" value={email} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Mobile</Form.Label>
     <Form.Control type="text" placeholder="Enter Mobile" value={mobile} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>City</Form.Label>
     <Form.Control type="text" placeholder="Enter City Name" value={city} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={fullAddress} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={pincode} readOnly/>
      </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Batch</Form.Label>
     <Form.Control type="text" placeholder="Enter Batch" value={batch} readOnly/>
   </Form.Group>
  
 </Form>

 </div>
</div>
}

export default Profile