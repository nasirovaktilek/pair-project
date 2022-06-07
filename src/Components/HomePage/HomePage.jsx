import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";

import bghomepage from "../../assets/images/bg_home_page.jpg";
import carouselImage1 from "../../assets/images/bg_1.jpg";
import carouselImage2 from "../../assets/images/bg_2.jpg";
import carouselImage3 from "../../assets/images/bg_3.jpg";
import aboutImg from "../../assets/images/about.jpg";
import order from "../../assets/images/order.png";
import delivery from "../../assets/images/delivery.png";
import quality from "../../assets/images/quality.png";
import menu1 from "../../assets/images/menu1.jpg";
import menu2 from "../../assets/images/menu2.jpg";
import menu3 from "../../assets/images/menu3.jpg";
import menu4 from "../../assets/images/menu4.jpg";

import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      {/* //! HomePage start */}
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
      {/* //! Section 2 start */}
      <section
        style={{ backgroundColor: "#1e1c1c" }}
        className="ftco-about d-md-flex"
      >
        <div
          className="one-half img"
          // style={{ backgroundImage: `url(${aboutImg})` }}
        >
          <img src={aboutImg} alt={aboutImg} />
        </div>
        <div className="one-half ftco-animate" style={{ position: "absolute" }}>
          <div
            className="overlap"
            style={{
              backgroundColor: "#1b1b1b5e",
              position: "relative",
              width: "600px",
              marginLeft: "900px",
              marginTop: "100px",
              borderRadius: "20px",
            }}
          >
            <div className="heading-section ftco-animate">
              <span
                className="subheading"
                style={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: "50px",
                  color: "#c49b63",
                  margin: "0 20px",
                }}
              >
                Discover
              </span>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: "40px",
                  color: "#FFFFFFB3",
                  margin: "0 20px",
                }}
              >
                OUR STORY
              </h2>
            </div>

            <div>
              <p
                style={{
                  margin: "20px 20px",
                  paddingBottom: "20px",
                  color: "#808080",
                  lineHeight: "30px",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                }}
              >
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* //! Section 3 start */}
      <section
        style={{ backgroundColor: "#C49B63" }}
        className="ftco-section ftco-services"
      >
        <div style={{ margin: "0 20px" }} className="container">
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div
                style={{ width: "400px", margin: "100px" }}
                className="media d-block text-center block-6 services"
              >
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-choices"></span>
                  <img style={{ width: "100px" }} src={order} alt={order} />
                </div>
                <div className="media-body">
                  <h3
                    style={{ fontFamily: "Josefin Sans", margin: "30px" }}
                    className="heading"
                  >
                    Easy to Order
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                    }}
                  >
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div
                style={{ width: "400px", margin: "100px" }}
                className="media d-block text-center block-6 services"
              >
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-delivery-truck"></span>
                  <img
                    style={{ width: "100px" }}
                    src={delivery}
                    alt={delivery}
                  />
                </div>
                <div className="media-body">
                  <h3
                    style={{ fontFamily: "Josefin Sans", margin: "30px" }}
                    className="heading"
                  >
                    Fastest Delivery
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                    }}
                  >
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div
                style={{ width: "400px", margin: "100px" }}
                className="media d-block text-center block-6 services"
              >
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="flaticon-coffee-bean"></span>
                  <img style={{ width: "100px" }} src={quality} alt={quality} />
                </div>
                <div className="media-body">
                  <h3
                    style={{ fontFamily: "Josefin Sans", margin: "30px" }}
                    className="heading"
                  >
                    Quality Coffee
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                    }}
                  >
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //! Section 4 start */}
      <section
        style={{ backgroundColor: "#1e1c1c", color: "#FFFFFFB3" }}
        className="ftco-section"
      >
        <div className="container">
          <div
            style={{ marginBottom: "100px" }}
            className="row justify-content-center mb-5 pb-3"
          >
            <div
              style={{ marginTop: "50px" }}
              className="col-md-7 heading-section ftco-animate text-center"
            >
              <span
                style={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: "50px",
                  color: "#c49b63",
                }}
                className="subheading"
              >
                Discover
              </span>
              <h2
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: "40px",
                }}
                className="mb-4"
              >
                BEST COFFEE SELLERS
              </h2>
              <p
                style={{
                  lineHeight: "30px",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#808080",
                }}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="menu-entry">
                <img style={{ width: "300px" }} src={menu1} alt={menu1} />
                <div className="text text-center pt-4">
                  <h3>
                    <a
                      style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "#FFFFFFB3",
                      }}
                      href="#"
                    >
                      COFFEE CAPUCCINO
                    </a>
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                      color: "#808080",
                    }}
                  >
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>$5.90</span>
                  </p>
                  <p>
                    <button
                      className="btn btn-dark btn-outline-light"
                      style={{
                        // outline: "#c49b63",
                        // backgroundColor: "#c49b63",
                        marginBottom: "60px",
                      }}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <img style={{ width: "300px" }} src={menu2} alt={menu2} />
                <div className="text text-center pt-4">
                  <h3>
                    <a
                      style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "#FFFFFFB3",
                      }}
                      href="#"
                    >
                      {" "}
                      COFFEE CAPUCCINO
                    </a>
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                      color: "#808080",
                    }}
                  >
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>$5.90</span>
                  </p>
                  <p>
                    <button
                      className="btn btn-dark btn-outline-light"
                      style={
                        {
                          // outline: "#c49b63",
                          // backgroundColor: "#c49b63",
                        }
                      }
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <img style={{ width: "300px" }} src={menu3} alt={menu3} />
                <div className="text text-center pt-4">
                  <h3>
                    <a
                      style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "#FFFFFFB3",
                      }}
                      href="#"
                    >
                      {" "}
                      COFFEE CAPUCCINO
                    </a>
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                      color: "#808080",
                    }}
                  >
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>$5.90</span>
                  </p>
                  <p>
                    <button
                      className="btn btn-dark btn-outline-light"
                      style={
                        {
                          // outline: "#c49b63",
                          // backgroundColor: "#c49b63",
                        }
                      }
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <img style={{ width: "300px" }} src={menu4} alt={menu4} />
                <div className="text text-center pt-4">
                  <h3>
                    <a
                      style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "#FFFFFFB3",
                      }}
                      href="#"
                    >
                      COFFEE CAPUCCINO
                    </a>
                  </h3>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      lineHeight: "30px",
                      color: "#808080",
                    }}
                  >
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>$5.90</span>
                  </p>
                  <p>
                    <button
                      className="btn btn-dark btn-outline-light"
                      style={
                        {
                          // outline: "#c49b63",
                          // backgroundColor: "#c49b63",
                        }
                      }
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //! Footer start */}
      <Footer />
    </>
  );
};

export default HomePage;
