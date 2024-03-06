import React from "react";
import "./ProfileCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = (props) => {
  const {
    first_name,
    last_name,
    middle_name,
    city,
    state,
    age,
    height,
    occupation,
    income,
    higher_degree,
    caste,
  } = props;
  return (
    <div className="ProfileCard">
      <div className="ProfileCard_img">
        <img />
      </div>
      <div className="ProfileCard_detail">
        <div className="profile_name">
          <span>
            {first_name}
            {middle_name}
            {last_name}
          </span>
          ,<span>{age}</span>
        </div>
        <div className="profile_cst_add">
          <span className="dot">.</span>
          <div>{height}</div>
          <span className="dot">.</span>
          <div>
            {city} $ {state}
          </div>
          <span className="dot">.</span>
          <div>{caste}</div>
        </div>
        <div className="profile_occupation">
          <div className="">{occupation}</div>
          <div>{income}</div>
        </div>
        <div>{/* <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /> */}</div>
        <div className="profile_study">{higher_degree}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
