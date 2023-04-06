import React from "react";

// import "../index.css";

export default function Profile(props) {
  return (
    
    <div className="Container">
      <img src={props.picture} alt="Profile Avatar" />
      <p className="Username">{props.username}</p>
      <p className="Bio">{props.bio}</p>
    </div>
  );
}
