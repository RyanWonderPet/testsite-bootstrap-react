import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronRight } from "react-icons/fa";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Footer() { 
  return (
    <footer className="flex-shrink-0 div-footer">
  <div className="container pt-5 pb-5 text-lg-left text-sm-left">
    <div className="row gy-4 gx-5">
      <div className="col-lg-4 col-md-6 col-sm-6 col-6">
        <h6 className="text-white">COMPANY</h6>
        <h6 className="text-secondary">
        <p className="adding-style-to-fontsize">A108 Adam Street <br /> New Yor, NY 535022 <br /> United States <br />
                                <br />Phone: +1 5589 55488 55 <br /> Email: info@example.com 
                            </p>
        </h6>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6">
        <h6 className="text-white mb-3">Useful Links</h6>
        <ul className="list-unstyled text-muted ">
          <li>
            <a href="#!" className="text-reset">
              <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
               Home
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              About Us
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Services
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Terms of service
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6 col-6">
        <h6 className="text-white mb-3">Our Services</h6>
        <ul className="list-unstyled text-muted">
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Web Design
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Web Development
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Product Management
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Marketing
            </a>
          </li>
          <li>
            <a href="#!" className="text-reset">
            <FontAwesomeIcon className="text-success fa-2xs" icon={faChevronRight} />{" "}
              Grapchic Design
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-6">
        <h6 className="text-white mb-3">Join Our Newsletter</h6>
        <p className="small text-muted">
          Tanem quem mulla quae legam multos aute sint culpa legam noster magna{" "}
        </p>
        <form action="#">
          <div className="input-group input-group-sm  mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-success btn-sm text-light"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</footer>
  );
}


export default Footer;
