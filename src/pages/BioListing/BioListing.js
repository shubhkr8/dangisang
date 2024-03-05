import React from "react";
import { useUserContext } from "../../App";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const BioListing = () => {
  const { allProfile } = useUserContext();
  return (
    <div>
      {allProfile?.map((data, index) => {
        return <ProfileCard key={index} {...data} />;
      })}
    </div>
  );
};

export default BioListing;
