import React from "react";
import business from "../../img/business.jpg";
import "bootstrap/dist/css/bootstrap.min.css";





const CarouselSlider = () => {
  return (
    <>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-interval="false"
    >
      <ol className="carousel-indicators div-carousel-indicator">
        <li
          id="div-carousel-slide1"
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li
          id="div-carousel-slide2"
          data-target="#carouselExampleIndicators"
          data-slide-to={1}
        />
        <li
          id="div-carousel-slide3"
          data-target="#carouselExampleIndicators"
          data-slide-to={2}
        />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="bg-img">
          <img src={business} className="img-fluid" alt="avatar" />
            <div className="carousel-caption div-carousel p-3">
              <h5>Lorem Ipsum Dolor</h5>
              <p className="div-carousel-caption">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architectol.
              </p>
              <div className="d-flex justify-content-center div_button">
                <button
                  type="button"
                  className="btn btn-outline-success text-white div-caption-button "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-img">
          <img src={business} className="img-fluid" alt="avatar" />
            <div className="carousel-caption div-carousel p-3">
              <h5>Lorem Ipsum Dolor</h5>
              <p className="div-carousel-caption">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architectol.
              </p>
              <div className="d-flex justify-content-center div_button">
                <button
                  type="button"
                  className="btn btn-outline-success text-white div-caption-button "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-img">
          <img src={business} className="img-fluid" alt="avatar" />
            <div className="carousel-caption div-carousel p-3">
              <h5>Lorem Ipsum Dolor</h5>
              <p className="div-carousel-caption">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architectol.
              </p>
              <div className="d-flex justify-content-center div_button">
                <button
                  type="button"
                  className="btn btn-outline-success text-white div-caption-button "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev bg-circle-prev ml-2"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next bg-circle-next mr-2"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
    {/* Carousel */}
  </>
  
  );
}

export default CarouselSlider;
