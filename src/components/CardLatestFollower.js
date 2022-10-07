import React from "react";
import "./cardLatestFollower.css";

const followers = [
  {
    img: "/img/followers/Ellipse58.svg",
    name: "Derek",
  },
  {
    img: "/img/followers/Ellipse58(1).svg",
    name: "Shane",
  },
  {
    img: "/img/followers/Ellipse58(2).svg",
    name: "Alvin",
  },
  {
    img: "/img/followers/Ellipse58(3).svg",
    name: "Bob",
  },
  {
    img: "/img/followers/Ellipse58(4).svg",
    name: "Minnie",
  },
  {
    img: "/img/followers/Ellipse58(5).svg",
    name: "Melanine",
  },
];

const CardLatestFollower = () => {
  return (
    <div className="cardLatestFollower">
      <img className="kotak" src="/img/Rectangle.svg" />
      <h1>Lastest Followers</h1>
      <ul>
        {followers.map((item) => (
          <li>
            <img src={item.img} />
            <p className="followersName">{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="barContainer">
        <h2 className="barTitle">Followers Target</h2>
        <div className="bar">
          <div className="secondBar">
            <p className="barText">90% target acheived</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLatestFollower;
