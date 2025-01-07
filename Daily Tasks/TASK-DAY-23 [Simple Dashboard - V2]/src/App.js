import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { useState} from "react";

function App() {
  let [users,setUsers] = useState([
    {
      pic:"https://i.pinimg.com/564x/9f/74/53/9f74535608abc523efe3eb37a9a30a54.jpg",
      name:'Samuvel',
      email:'samuvel6826@gmail.com',
      mobile:'9910910901',
      city:"Colachel",
      fullAddress:'123, Anna Silai Main Road, Colachel',
      pincode:"629251",
      batch:'B46WET'
    },
    {
      pic:"https://i.pinimg.com/564x/b8/57/2b/b8572b720d5ed320dc6db968b13dd43a.jpg",
      name:'Sharon',
      email:'sharon@gmail.com',
      mobile:'9486215763',
      city:"Thuckalay",
      fullAddress:'55, Thuckalay Cross Cut Street, Thuckalay',
      pincode:"629159",
      batch:'B45WET'
    },
    {
      pic:"https://i.pinimg.com/564x/80/ab/27/80ab27dda0571a8affb7100ac89a6446.jpg",
      name:'Ashwin',
      email:'ashwin@gmail.com',
      mobile:'8918902091',
      city:"Marthandam",
      fullAddress:'432, Near Marthandam Bus Stand, Marthandam',
      pincode:"629852",
      batch:'B44WET'
    },
    {
      pic:"https://i.pinimg.com/564x/62/bd/59/62bd5959086f27041e6a9b0913b1d16b.jpg",
      name:'Naga Rajan',
      email:'naga@gmail.com',
      mobile:'8463217596',
      city:"Chennai",
      fullAddress:'66, Cross Cut Street, Chennai',
      pincode:"629001",
      batch:'B43WET'
    },
    {
      pic:"https://i.pinimg.com/564x/f4/37/b8/f437b811a4a7277fc2e1d31091d19f37.jpg",
      name:'Akash',
      email:'akash@gmail.com',
      mobile:'8918902091',
      city:"Nagercoil",
      fullAddress:'12, Richi Street, Nagercoil',
      pincode:"629159",
      batch:'B42WET'
    },
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path='/dashboard' element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/create-user' element={<CreateUser users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
          <Route path='/profile/:id' element={<Profile users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-profile/:id' element={<EditProfile users={users} setUsers={setUsers}/>}/>
          <Route path="*" element={<Navigate to = "/dashboard"/>}></Route>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>
  </>
}

export default App;