import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./data.css";

const profile = {
  compName: "Hunstman International Private Limited",
  name: "Sarang Shah",
  title: "Project Head",
  email: "sarang_shah@gmail.com",
  website: "huntsman",
  description:
    "Huntsman International(India) Private Limited is a chemicals comopany based out of Lighthall B-WingHirandani Business ParkSaki Vihar Road Andheri",
  headCount: "51-200 Employees",
  revenue: "5-10M",
  location: "",
  insights: ["Google Reseacrh","Local Weather","Local Sports Team"],
  compInsights: ["Google Finance","Google Research","Local Weather","Local Sports Team"]
};



export default function Data() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Data</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
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
              <span className="userShowUsername">{profile.name}</span>
              <span className="userShowUserTitle">{profile.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Personal Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{profile.email}</span>
            </div>
            <h3>Insights</h3>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"left",alignItems:"flex-start"}}className="userShowInfo">
            {profile.insights.map((insight,ind)=>{
                return <span className="userShowInfoTitle">{insight}</span>
            })}
            </div>
            <h3>Company Details</h3>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{profile.compName}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Website: {profile.website}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{profile.description}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{profile.headCount}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{profile.revenue}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{profile.location}</span>
            </div>
            <h3>Company Insights</h3>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"left",alignItems:"flex-start"}}className="userShowInfo">
            {profile.compInsights.map((insight,ind)=>{
                return <span className="userShowInfoTitle">{insight}</span>
            })}
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div> */}
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Update Data set</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Contact Name</label>
                <input
                  type="text"
                  placeholder={profile.name}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder={profile.title}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={profile.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder={profile.compName}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Company Website</label>
                <input
                  type="text"
                  placeholder={profile.website}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Company description</label>
                <textarea
                  type="text"
                  placeholder={profile.description}
                  rows="10"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Company Revenue</label>
                <input
                  type="text"
                  placeholder={profile.revenue}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Company headCount</label>
                <input
                  type="text"
                  placeholder={profile.headCount}
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
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
