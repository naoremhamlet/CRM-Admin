import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import {useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'


export default function User() {
  let id=useParams().userId
  console.log(id)
  const [userData,setUserData]=useState({username:"",dob:"",email:"",location:"",phone:""})
  const [credits,setCredits]=useState("")
  const [packages,setPackages]=useState("")

  useEffect(()=>{

    axios.get('http://localhost:8080/admin/getUserData?id='+id)
    .then(res=>{
      if(res.data.ans)
      {
        setUserData(res.data.user)
        setCredits(res.data.user.credits)
        setPackages(res.data.user.package)


      }
      
    })
  },[])

  const updateUserData=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/admin/updateUser',{id:id,credits:credits,package:packages})
    .then(res=>{
      alert(res.data.message)
    })
  }


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData.name}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{userData.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{userData.dob?.split("T")[0]||""}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{userData.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{userData.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{userData.location}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  // placeholder="annabeck99"
                  disabled
                  value={userData.username||""}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  // placeholder="Anna Becker"
                  disabled
                  value={userData.name||""}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  disabled
                  // placeholder="annabeck99@gmail.com"
                  
                  value={userData.email||""}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  // placeholder="+1 123 456 67"
                  disabled
                  value={userData.phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  type="text"
                  // placeholder="New York | USA"
                  disabled
                  value={userData.location}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Credits</label>
                <input
                  type="number"
  
                  value={credits}
                  onChange={e=>setCredits(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Package</label>
                <input
                  type="text"
                  // placeholder="New York | USA"
                  value={packages}
                  onChange={e=>setPackages(e.target.value)}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={updateUserData}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
