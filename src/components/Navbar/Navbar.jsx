import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap";
import { NavbarToggleProps } from "react-bootstrap/esm/NavbarToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Collapse from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Dropdown } from "react-bootstrap";
import NavLink from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className="navbar container navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="index.html">
      <span className="test-nav-brand">TEST</span>
      <span className="site-nav-brand">SITE</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar7"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="navbar-collapse collapse justify-content-stretch"
      id="navbar7"
    >
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link text-success" href="index.html">
            HOME
          </a>
        </li>
        <div className="nav-item dropdown">
          <a
            className="nav-link font-weight-bold dropdown-toggle text-dark"
            data-toggle="dropdown"
            href="#"
          >
            ABOUT
          </a>
          <div className="dropdown-menu dropright border-0">
            <a className="dropdown-item" href="About.html">
              About Us
            </a>
            <a className="dropdown-item" href="Team.html">
              Team
            </a>
            <a className="dropdown-item" href="testimonials.html">
              Testimonials
            </a>
            <a
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
              href="#"
            >
              Deep Drop Down
            </a>
            <div className="dropdown-menu border-0">
              <a className="dropdown-item" href="#">
                item 1
              </a>
              <a className="dropdown-item" href="#">
                item 2
              </a>
              <a className="dropdown-item" href="#">
                item 3
              </a>
            </div>
          </div>
        </div>
        <li className="nav-item">
          <a className="nav-link text-dark" href="services.html">
            SERVICES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="portfolio.html">
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="pricing.html">
            PRICING
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="blog.html">
            BLOG
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="contact.php">
            CONTACT
          </a>
        </li>
        <li className="div-separator d-none d-lg-block">|</li>
        <ul className="navbar-nav fa-expand-lg sm-icons">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> 
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </nav>
  
  );
}

export default NavBar;
