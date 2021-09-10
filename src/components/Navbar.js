import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link className="nav-text" to="/">
            KPU KMTK 2021
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a
          class={`nav-links-box ${
            props.location.pathname === "/calon" ? "active" : ""
          }`}
        >
          <Link className="nav-text" to="/calon">
            Calon
          </Link>
        </a>
        <a
          class={`nav-links-box ${
            props.location.pathname === "/informasi" ? "active" : ""
          }`}
        >
          <Link className="nav-text" to="/informasi">
            Informasi
          </Link>
        </a>
        <a
          class={`nav-links-box ${
            props.location.pathname === "/tatacara" ? "active" : ""
          }`}
        >
          <Link className="nav-text" to="/tatacara">
            Tatacara
          </Link>
        </a>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
