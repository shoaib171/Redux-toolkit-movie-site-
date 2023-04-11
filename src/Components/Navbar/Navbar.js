/** @format */

import React from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../Common/images/tv.png";
const Navbar = () => {
  return (
    <>
      <nav className="Navbar navbar navbar-dark bg-dark shadow-sm ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Brand Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2 "
            />
            <span className="Brand fw-bold fs-3 animate__animated animate__flash  ">
              Movie Series
            </span>
          </NavLink>
          <div className="buttons">
            <button className="btn btn-outline-light ">
              <i className="fa fa-sign-in me-2"></i>
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
