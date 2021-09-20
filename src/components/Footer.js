import React from "react";
import "../styles/Footer.css";
import LogoKMTK from "../assets/images/logo-kmtk.png";
import logoKabinet from "../assets/images/logo-kabinet-kmtk.png";
import LogoUGM from "../assets/images/logo-ugm.png";
import instagram from "../assets/images/instagram.png";
import line from "../assets/images/line.png";

export default function Footer() {
  return (
    <div className="container-fluid footer-container">
      <div className="row py-4">
        <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-start order-2 order-md-1 my-2">
          <div className="image-wrapper">
            <img className="logo" src={LogoUGM} alt="logo UGM"></img>
            <img className="logo" src={LogoKMTK} alt="logo kmtk"></img>
            <img className="logo" src={logoKabinet} alt="logo kabinet"></img>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-end order-1 order-md-2 my-2">
          <div className="official-account">
            official account
            <div className="official-account">
              <a href="https://instagram.com/kmtkftugm">
                <img className="social-media" src={instagram}></img>
              </a>
              <a href="https://line.me/R/ti/p/@kmtkftugm">
                <img className="social-media" src={line}></img>
              </a>
              <a href="https://line.me/R/ti/p/@sdg0260c">
                <img className="social-media" src={line}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
