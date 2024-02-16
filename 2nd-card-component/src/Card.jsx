import React from "react";
import  profilePic from './assets/images.jpeg'

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Shibu</h2>
      <p className="card-text">I make Websites and play video games</p>
    </div>
  );
};

export default Card;
