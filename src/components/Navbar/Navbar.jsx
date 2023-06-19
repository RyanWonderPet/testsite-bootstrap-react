import React, { useState } from "react";
import { Nav } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";




function NavBar() {
  const [ updateExpanded] = useState(false);
  const [  updateNavbar] = useState(false);

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
      <Nav.Item>
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Home"
                onClick={() => updateExpanded(false)}
              >
                 HOME
              </Nav.Link>
            </Nav.Item>
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
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Services"
                onClick={() => updateExpanded(false)}
              >
                 SERVICES
              </Nav.Link>
        <li className="nav-item">
        <Nav.Item>
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Portfolio"
                onClick={() => updateExpanded(false)}
              >
                 PORTFOLIO
              </Nav.Link>
        </Nav.Item>
        </li>
        <Nav.Item>
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Pricing"
                onClick={() => updateExpanded(false)}
              >
                 PRICING
              </Nav.Link>
        </Nav.Item>
        <Nav.Item>
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Blog"
                onClick={() => updateExpanded(false)}
              >
                 BLOG
              </Nav.Link>
        </Nav.Item>
        <Nav.Item>
              <Nav.Link
               className="text-dark"
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                 CONTACT
              </Nav.Link>
        </Nav.Item>
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
