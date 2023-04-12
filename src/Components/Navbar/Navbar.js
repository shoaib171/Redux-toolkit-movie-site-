/** @format */

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Common/images/tv.png";
import { useDispatch } from "react-redux";
import {
  FetchAsyncMovies,
  FetchAsyncShows,
} from "../../ReduxToolkit/MovieSlice";
const Navbar = () => {
  const [SearchText, setSearchText] = useState();
  const dispatch = useDispatch();
  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(SearchText);
    dispatch(FetchAsyncMovies(SearchText));
    dispatch(FetchAsyncShows(SearchText));
    setSearchText("");
  };
  const handleValue = (e) => {
    setSearchText(e.target.value);
  };
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
              className="me-1"
            />
            <span className="Brand fw-bold fs-3 animate__animated animate__flash   ">
              Movie Series
            </span>
          </NavLink>

          <form className="d-flex Form--search" onSubmit={HandleSubmit}>
            <input
              className="form-control px-2 "
              placeholder="search Movie here.."
              value={SearchText}
              onChange={handleValue}
            />
            <button className=" bun btn" type="submit">
              <i className=" fs-5 fa fa-search text-light"></i>
            </button>
          </form>

          <div className="buttons ">
            <button className="btn btn-outline-light  ms-3">
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
