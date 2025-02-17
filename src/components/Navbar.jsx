import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      {/* Navlink */}
      <div className="nav space-x-5">
        <Link to="">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      {/* logo */}
      <div className="logo flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
