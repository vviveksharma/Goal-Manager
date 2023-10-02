import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import profileImage from "../../assets/person-circle.svg";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Editprofile from "./edit-profile";
const Profile = () => {
  const [userData, setUserData] = useState({
    age: "22",
    bio: "This is a ambitiuos software developer",
    gender: "male",
    email: "admin@gmail.com",
    username: "adminvivek",
    work: "Software Developer",
  });

  async function getUserInfo() {
    const username = localStorage.getItem("username");
    const info = await axios.get(
      `http://localhost:8000/users/info/${username}`
    );
    setUserData({
      age: info.data.user.age,
      bio: info.data.user.bio,
      gender: info.data.user.gender,
      email: info.data.user.email,
      username: info.data.user.username,
      work: info.data.user.work,
    });
  }
  useEffect(() => {
    // getUserInfo();
  }, []);

  const handleEdit = () => {
    console.log("The UserData",userData);
    <Editprofile userdata={userData} />;
  };

  return (
    <div>
      <Sidebar />
      <h1>Profile</h1>
      <div className="container">
        <div className="box">
          <img src={profileImage} alt="" />
          <ul>
            <li>{userData.username}</li>
            <li>{userData.age}</li>
            <li>{userData.email}</li>
            <Link to={"/main"}>
              <button className="profile-button">Dashboard</button>
            </Link>
            <Link to={"/edit-profile"} onClick={handleEdit} state={userData}>
              <button className="profile-button">Edit Profile</button>
            </Link>
          </ul>
        </div>
        <div className="About">
          <ul>
            <h1>Profile</h1>
          </ul>
          <ul>
            <h3>Work</h3>
            <li>{userData.work}</li>
          </ul>
          <ul>
            <h3>Gender</h3>
            <li>{userData.gender}</li>
          </ul>
          <ul>
            <h3>Country</h3>
            <li>India</li>
          </ul>
          <ul>
            <h3>More Info</h3>
            <p>{userData.bio}ge editors now use Lorem Ipsum.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
