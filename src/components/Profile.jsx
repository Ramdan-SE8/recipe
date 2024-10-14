// components/Profile.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Profile.css"; // You can create this CSS file to style your profile

const Profile = () => {
  const { loggedInUsername, isLoggedIn } = useContext(UserContext);

  // Sample user data for demonstration. In a real app, this could be fetched from an API.
  const userData = {
    displayName: loggedInUsername || "Guest",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG6U7DsIIUVQmkDyihIPWI-aBCmeLli02NQ&s",
    aboutMe: "I love cooking and trying out new recipes!",
  };

  if (!isLoggedIn) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h1>{userData.displayName}'s Profile</h1>
      <div className="profile-card">
        <img
          src={userData.avatar}
          alt="User Avatar"
          className="profile-avatar"
        />
        <p>
          <strong>About Me:</strong>
          <br /> {userData.aboutMe}
        </p>
      </div>
    </div>
  );
};

export default Profile;
