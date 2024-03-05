import React from "react";
import "./Header.css";
import HeroBanner from "../HeroBanner/HeroBanner";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <p className="logo">Dangisangh</p>
        </div>
        <div className="header_items">
          <div className="header_login">login</div>
          <div className="free_login">Free login</div>
          <div className="header_help">Help</div>
        </div>
      </div>
      <HeroBanner />
    </>
  );
};

export default Header;
