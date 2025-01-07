import React from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';

function Dashboard({users,setUsers}) {
  let navigate = useNavigate()
  let data = [
    {
      title : "Earnings (Monthly)",
      value : "$40,000",
      color : "primary",
      icon : "fa-calender",
      isProgress : false
    },
    {
      title : "Earnings (Annual)",
      value : "$160,000",
      color : "success",
      icon : "fa-dollar-sign",
      isProgress : false
    },
    {
      title : "Task",
      value : "50%",
      color : "info",
      icon : "fa-clipboard-list",
      isProgress : true
    },
    {
      title : "Pending Request",
      value : "18",
      color : "warning",
      icon : "fa-comments",
      isProgress : false
    }
  ]

let handleDelete = (i)=> {
  let newUsers = [...users]
  newUsers.splice(i,1)
  setUsers(newUsers)
}

  return <>
  <div className="container-fluid">

{/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h1 mb-0 text-gray-800">Dashboard</h1>
            </div>

{/* <!-- Content Row --> */}
            <div className="row">
                {
                  data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }
            </div>
          </div>

          <div className='container-fluid'> 

          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">List Users</h1>
            </div>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
          <th>Batch</th>
          <th style={{textAlign: "center"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.city}</td>
            <td>{e.batch}</td>
            <td style={{textAlign: "center", fontSize : "1.5rem"}}>

            <div>
                <i class="fa-solid fa-user" style={{color: "#4e73df"}} onClick={()=>{navigate(`/profile/${i}`)}}></i>&nbsp;
                <i class="fa-solid fa-pen-to-square" style={{color: "#00cc3d"}} onClick={()=>{navigate(`/edit-user/${i}`)}}></i>&nbsp;
                <i class="fa-solid fa-trash" style={{color: "#e74a3b",}} onClick={()=>handleDelete(i)}></i>
            </div>

              {/* <Button variant='primary' onClick={()=>{navigate(`/edit-user/${i}`)}}> */}
                {/* <link to = {`/edit-user/${i}`}>Edit</link> */}
                {/* Edit
              </Button>
              &nbsp;
              <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button> */}
              </td>
          </tr>
        })
      }
      </tbody>
    </Table>
          </div>
  </>
}

export default Dashboard