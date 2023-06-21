import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../img/walter white.png";
import img1 from "../../img/sarah.png";
import img2 from "../../img/william.png";
import img3 from "../../img/amanda.png";







const MyTeam = () => {
  return (
    <>
  <div className="our_team_div">
  <div className="container pb-5 pt-5">
    <h5 className="text-center font-weight-bold">OUR TEAM</h5>
    <hr className="mb-4 border-success hr-indicator" />
    <div className="text-center">
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 text-center">
        <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Walter White</h5>
            <p className="card-text">
              <small className="text-muted">Chief Executive Officer</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center">
        <div className="card h-100">
        <img src={img1} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Sarah Jhonson</h5>
            <p className="card-text">
              <small className="text-muted">Product Manager</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center">
        <div className="card h-100">
        <img src={img2} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">william Anderson</h5>
            <p className="card-text">
              <small className="text-muted">CTO</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center">
        <div className="card h-100">
        <img src={img3} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Amanda Jepson</h5>
            <p className="card-text">
              <small className="text-muted">Accountant</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  </>
  
  );
}

export default MyTeam;
