import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted footer-p">
          &copy; 2023 Makeup Store. All rights reserved.
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <NavLink className="nav-item nav-link active" to="/">
            <img
              className="logo"
              src={require("../../assets/imges/store.png")}
              alt="logo"
            />
          </NavLink>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link px-2 text-muted" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2 text-muted" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link px-2 text-muted" to="/contact_us">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link px-2 text-muted" to="/FAQs">
              FAQs
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link px-2 text-muted" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
