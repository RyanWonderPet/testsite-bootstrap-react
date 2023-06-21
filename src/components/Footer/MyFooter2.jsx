import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";

function MyFooter2() { 
  return (
    <div className="footer-div p-3">
    <div className="container mt-0 text-white">
      <div className="d-md-flex">
        <div className="flex-grow-1 align-self-center">
          @Copyright TestSite. All Rights Reserve
        </div>
        <div className="">
          <ul className="navbar-nav footer-icons float-lg-right">
            <div className="card bg-dark p-2 mr-1 float-lg-right">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="card bg-dark p-2 mr-1">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="card bg-dark p-2 mr-1">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="card bg-dark p-2 mr-1">
              <FontAwesomeIcon icon={faSkype} />
            </div>
            <div className="card bg-dark p-2 mr-1">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  );
}


export default MyFooter2;
