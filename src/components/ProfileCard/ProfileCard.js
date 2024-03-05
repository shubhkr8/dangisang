import React from "react";

const ProfileCard = (props) => {
  const { first_name, last_name } = props;
  return (
    <div className="ProfileCard">
      {first_name} is last name {last_name}
    </div>
  );
};

export default ProfileCard;
