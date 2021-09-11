import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCF2E3"
          fill-opacity="1"
          d="M0,128L34.3,160C68.6,192,137,256,206,234.7C274.3,213,343,107,411,90.7C480,75,549,149,617,165.3C685.7,181,754,139,823,112C891.4,85,960,75,1029,96C1097.1,117,1166,171,1234,176C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="calon-text">CALON KETUA</div>
      <div className="card-wrapper">
        <div>
          <Link to="/calon1">
            <Card no="1" />
          </Link>
          <Link to="/calon2">
            <Card no="2" />
          </Link>
        </div>
        <div>
          <Link to="/calon3">
            <Card no="3" />
          </Link>
          <Link to="/calon4">
            <Card no="4" />
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 250">
        <path
          fill="#FCF2E3"
          fill-opacity="1"
          d="M0,128L34.3,160C68.6,192,137,256,206,234.7C274.3,213,343,107,411,90.7C480,75,549,149,617,165.3C685.7,181,754,139,823,112C891.4,85,960,75,1029,96C1097.1,117,1166,171,1234,176C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
