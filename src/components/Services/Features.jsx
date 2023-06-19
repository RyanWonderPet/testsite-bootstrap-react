import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faCalendar, faChartSimple, faCircleDot, faCirclePlay, faClipboard, faClipboardList, faCoins, faFingerprint, faPaintRoller, faStore, faTowerBroadcast, faWarehouse } from "@fortawesome/free-solid-svg-icons";





const Features = () => {
  return (
   <>
  <div className="container pt-5 pb-5">
  <h5 className="text-center font-weight-bold">FEATURES</h5>
  <hr className=" mb-4 border-success hr-indicator" />
  <p className="text-center">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus suscipit
    fugit excepturi rem! Consequuntur voluptate voluptatibus totam qui quasi,
    dolorem distinctio, saepe veniam, nulla ex vel nobis et culpa repellat?
  </p>
  <div className="row">
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow rounded-0 h-100 font-weight-bold">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faStore} style={{ color: "#f0ea47" }}  />
            &nbsp; Lorem Ipsum
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faChartSimple}  style={{ color: "#2e6ad1" }} />
            &nbsp; Dolor Sitama
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={ faCalendar} style={{ color: "#fc47ff" }}/>
            &nbsp; Sed perspiciatis
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faPaintRoller} style={{ color: "#ea57e5" }}/>
            &nbsp; Magni dolores
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faCoins} style={{ color: "#1e95f1" }}/>
            &nbsp; Nemo enim
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#eac980" }}/>
            &nbsp; Eiusmod tempor
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faClipboardList}style={{ color: "#51e1d8" }}/>
            &nbsp; Midela taren
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faWarehouse} style={{ color: "#2452a3" }}/>
            &nbsp; Pira Neve
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faAnchor}style={{ color: "#d18010" }}/>
            &nbsp; Dirada pack
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faCirclePlay}  style={{ color: "#a52275" }}/>
            &nbsp; Moton ideal
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faTowerBroadcast}style={{ color: "#f1870e" }}/>
            &nbsp; Verdo Park
          </h6>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 p-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h6 className="card-title mt-2 font-weight-bold">
            <FontAwesomeIcon icon={faFingerprint}style={{ color: "#079711" }}/>
            &nbsp; Flavor Nivelanda
          </h6>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  
  );
}

export default Features;
