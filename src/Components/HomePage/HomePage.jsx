import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";
import carouselImage1 from "../../assets/images/bg_1.jpg";
import carouselImage2 from "../../assets/images/bg_2.jpg";
import carouselImage3 from "../../assets/images/bg_3.jpg";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={carouselImage1}
            alt={carouselImage1}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={carouselImage2}
            alt={carouselImage2}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={carouselImage3}
            alt={carouselImage3}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
