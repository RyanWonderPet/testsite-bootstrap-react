import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble} from '@fortawesome/free-solid-svg-icons'






const Description = () => {
  return (
    <>
   <div className="container pt-5 pb-5">
  <div className="row">
    <div className="col-lg-6 col-md-6">
      <h2 className="text-dark font-weight-bold">
        EUM IPSAM LABORUM DELENITI VELITENA
      </h2>
      <p className="text-dark font-weight-bold">
        voluptatem dinissimos provident quasi corporis{" "}
        <br className="d-none d-lg-block" /> voluptates sit assum perenda sruen
        jonee trave
      </p>
    </div>
    <div className="col-lg-6 col-md-6">
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Exepteursint occaecat cupidatat non proident, sunt in
        culpa qui official deserunt mollit anim id est laborum
      </p>
      <ul className="fa-ul">
        <li>
        <span className="fa-li">
         <FontAwesomeIcon className="text-success" icon={faCheckDouble} />
        </span>
          Ullamco laboris nisi ut aliquip ex ea commodo consequa
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon className="text-success" icon={faCheckDouble}/>
          </span>{" "}
          Duis aute irure dolor in reprehenderit in voluptate velit
        </li>
        <li>
          <span className="fa-li">
            <FontAwesomeIcon className="text-success" icon={faCheckDouble}/>
          </span>{" "}
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in
        </li>
      </ul>
      <p className="font-italic">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magno aliqua.
      </p>
    </div>
  </div>
</div>

  </> 
  
  );
}

export default Description;
