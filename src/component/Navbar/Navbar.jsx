import React from "react";
import logo from "../../assests/images/LAST CHANCE TICKET (1).png";
import { FaPhone } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container-fluid">
          <a className="navbar-brand " href="a#">
            <img src={logo} width={250}  alt="" />
            <p className="logo-text">
              Y O U R T R U S T E D T I C K E T S E L L E R
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 gap-5 align-items-center">
              <li className="nav-item followers">
                <a className="nav-link active" aria-current="page" href="#a">
                  100+Social Media Followers
                </a>
              </li>
              <li className="nav-item Font-same-style">
                <a className="nav-link active" aria-current="page" href="#a">
                  Request Event
                </a>
              </li>
              <li className="nav-item Font-same-style">
                <a className="nav-link active" aria-current="page" href="#a">
                  Contact Us
                </a>
              </li>
              <FaPhone className="phoen-icon"/>
            <button className="btn-login-tickets " type="submit">
              Sell Tickets
            </button>
            <button className="btn-login-tickets" type="submit">
              Login{" "}
            </button>
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
