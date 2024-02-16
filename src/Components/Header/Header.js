import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/action";

export const Header = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const filterUsers = () => {
    dispatch(filterData(inputRef.current.value));
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/AddUser">
                  Add User
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                ref={inputRef}
                onChange={filterUsers}
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button class="btn btn-outline-primary" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
