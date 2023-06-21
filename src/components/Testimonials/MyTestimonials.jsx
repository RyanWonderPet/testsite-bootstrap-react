import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../img/soul-goodman.png";
import img1 from "../../img/sara-wilsson.png";
import img2 from "../../img/jena-karlis.png";
import img3 from "../../img/matt-brandon.png";
import img4 from "../../img/john-larson.png";
import img5 from "../../img/emily-harison.png";








const MyTestimonials = () => {
  return (
    <>
  {/* Breadcrumb */}
  <div className="bg-success">
    <div className="container  div-breadcrumb">
      <div className="row">
        <div className="col text-white div-active-page-title">Testimonials</div>
        <div className="col text-white text-right div-breadcrumb">
          <a className="text-white" href="index.html">
            Home
          </a>{" "}
          / Testimonials
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb */}


  <div className="div-testimonials">
  <div className="container pt-5 pb-5">
    <div className="row">
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3 rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              Saul Goodman
            </h6>
            <h6 className="text-black-50 div-person-name-title">
              Ceo &amp; Founder
            </h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Proin iaculis purus consequat sem cure dignissim donec
              porttitora entum suscipit rhoncus. Accusantium quam, ultricies
              eget id, aliquam eget nibh et. Maecen aliquam, risus at
              semper.&nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3  rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img1} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              Sara Wilsson
            </h6>
            <h6 className="text-black-50 div-person-name-title">Designer</h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Export tempor illum tamen malis malis eram quae irure esse
              labore quem cillum quid cillum eram malis quorum velit fore eram
              velit sunt aliqua noster fugiat irure amet legam anim culpa.&nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3  rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img2} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              Jena Karlis
            </h6>
            <h6 className="text-black-50  div-person-name-title">
              Store Owner
            </h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Enim nisi quem export duis labore cillum quae magna enim
              sint quorum nulla quem veniam duis minim tempor labore quem eram
              duis noster aute amet eram fore quis sint minim.&nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3  rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img3} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              Matt Brandon
            </h6>
            <h6 className="text-black-50 div-person-name-title">Freelancer</h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Fugiat enim eram quae cillum dolore dolor amet nulla culpa
              multos export minim fugiat minim velit minim dolor enim duis
              veniam ipsum anim magna sunt elit fore quem dolore labore illum
              veniam.&nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3  rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img4} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              John Larson
            </h6>
            <h6 className="text-black-50 div-person-name-title">
              Entrepreneur
            </h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Proin iaculis purus consequat sem cure dignissim donec
              porttitora entum suscipit rhoncus. Accusantium quam, ultricies
              eget id, aliquam eget nibh et. Maecen aliquam, risus at
              semper.&nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-2 col-lg-6 py-2">
        <div className="card p-3 rounded-0 h-100 shadow-sm">
          <div className="card-body">
          <img src={img5} className="float-left div-card-img-top" alt="avatar" />
            <h6 className="card-title pt-2 font-weight-bold mb-0">
              Emily Harison
            </h6>
            <h6 className="text-black-50 div-person-name-title">Store Owner</h6>
            <p className="card-text text-secondary font-italic">
              <i className="fa-solid fa-quote-left fa-xl" />
              &nbsp;Fugiat enim eram quae cillum dolore dolor amet nulla culpa
              multos export minim fugiat minim velit minim dolor enim duis
              veniam ipsum anim magna sunt elit fore quem dolore labore illum
              veniam. &nbsp;
              <i className="fa-solid fa-quote-right fa-xl" />
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

export default MyTestimonials;
