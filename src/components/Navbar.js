import React, { Component } from "react";
import LogoKMTK from "../assets/images/logo-kmtk.png";
import logoKabinet from "../assets/images/logo-kabinet-kmtk.png";
import "../styles/Navbar.css";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => scrollFunction();

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 80
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    // <div className={scrolled ? "nav-container active-scroll" : "nav-container"}>
    //   <div className="nav-logo">PEMILU KMTK 2021</div>
    //   <div className="nav-menu">
    // <Link className="navbar-brand" to="/#home">
    //   Home
    // </Link>
    //     <Link className="menu" to="/#calon">
    //       Calon
    //     </Link>
    //     <Link className="menu" to="/#tatacara">
    //       Tata Cara
    //     </Link>
    //   </div>
    // </div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light inactive">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/#home">
          PEMILU KMTK 2021
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/#calon">
                Calon
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/#tatacara">
                Tata Cara
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
