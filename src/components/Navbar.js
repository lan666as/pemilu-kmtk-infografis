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
    <div className={scrolled ? "nav-container active-scroll" : "nav-container"}>
      <div className="nav-logo">PEMILU KMTK 2021</div>
      <div className="nav-menu">
        <Link className="menu" to="#home">
          Home
        </Link>
        <Link className="menu" to="#calon">
          Calon
        </Link>
        <Link className="menu" to="#tatacara">
          Tata Cara
        </Link>
      </div>
    </div>
  );
}
