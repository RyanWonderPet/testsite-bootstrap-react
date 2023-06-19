import React from "react";
import business from "../../img/business.jpg";
import { Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





const Leetcode = () => {
  return (
    <Carousel>
  <Carousel.Item>
      <img src={business} className="d-block w-100 img-fluid" alt="avatar" />
      
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

  <img src={business} 
  className="img-fluid" alt="avatar" />


    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={business} className="img-fluid" alt="avatar" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
}

export default Leetcode;
