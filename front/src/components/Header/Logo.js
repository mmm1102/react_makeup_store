import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="col-6">
      <NavLink className="nav-item nav-link active" to="/">
        <img
          className="logo"
          src={require("../../assets/imges/store.png")}
          alt="logo"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
