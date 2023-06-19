import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../img/lorem-ipsum.png";
import img1 from "../../img/sed-perspiciatis.png";
import img2 from "../../img/magni-dolores.png";
import img3 from "../../img/nemo-enim.png";
import img4 from "../../img/dele-cardo.png";
import img5 from "../../img/diveradon.png";




const Services = () => {
  return (
   <>
  {/* Services*/}
  <div className="div-services pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
             <img src={img} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Lorem Ipsum</h5>
              <p className="card-text div-card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
          <img src={img1} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Sed Perspiciatis</h5>
              <p className="card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
          <img src={img2} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Magni Dolores</h5>
              <p className="card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
          <img src={img3} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Nemo Enim</h5>
              <p className="card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
          <img src={img4} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Dele Cardo</h5>
              <p className="card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 col-lg-4">
          <div className="card rounded-0  pt-5 pb-4">
          <img src={img5} className="card-img-top div-card-img-top mx-auto" alt="avatar" />
            <div className="card-body">
              <h5 className="card-title text-center">Divera Dom</h5>
              <p className="card-text text-center text-muted">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services*/}
</>
  
  );
}

export default Services;
