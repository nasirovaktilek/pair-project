import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "@mui/material";
import "./HomePage.css";
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
import PhoneIcon from "@mui/icons-material/Phone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import gallery1 from "../../assets/images/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery-4.jpg";
// import person2 from "../../assets/images/person_2.jpg";
// import person3 from "../../assets/images/person_3.jpg";
// import person4 from "../../assets/images/person_4.jpg";

import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateToList = () => {
    navigate("/list");
  };

  return (
    <>
      <Box>
        {/* //! HomePage start */}
        <div>
          <Carousel>
            <Carousel.Item
            // style={{ backgroundImage: `url(${carouselImage1})` }}
            >
              <img
                // style={{ height: "930px" }}
                interval={500}
                className="d-block w-100"
                src={carouselImage1}
                alt={carouselImage1}
              />
              <Carousel.Caption
                sx={{
                  // paddingBottom: "200px",
                  width: "700px",
                  // margin: "10px auto",
                }}
              >
                <p
                  style={{
                    // marginTop: "50px",
                    fontFamily: "Great Vibes, cursive",
                    fontSize: "60px",
                    color: "#c49b63",

                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Welcome
                </p>
                <h2
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: "40px",
                    color: "#FFFFFF",
                    marginBottom: "60px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Amazing Taste &amp; Beautiful Place
                </h2>
                <h6
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    marginBottom: "60px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </h6>
                <p>
                  <a
                    href="/list"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    style={{
                      backgroundColor: "#c49b63",
                      color: "white",
                      marginBottom: "150px",
                    }}
                  >
                    View Menu
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img
                // style={{ height: "930px" }}
                className="d-block w-100"
                src={carouselImage2}
                alt={carouselImage2}
              />
              <Carousel.Caption
                sx={{
                  paddingBottom: "200px",
                  width: "700px",
                  margin: "10px auto",
                }}
              >
                <p
                  style={{
                    fontFamily: "Great Vibes, cursive",
                    fontSize: "60px",
                    color: "#c49b63",
                    marginBottom: "60px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Welcome
                </p>
                <h2
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: "40px",
                    color: "#FFFFFF",
                    marginBottom: "60px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Creamy Hot and Ready to Serve
                </h2>
                <h6
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    marginBottom: "60px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </h6>
                <p>
                  <a
                    href="/list"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    style={{
                      backgroundColor: "#c49b63",
                      color: "white",
                      marginBottom: "150px",
                    }}
                  >
                    View Menu
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img
                // style={{ height: "930px" }}
                className="d-block w-100"
                src={carouselImage3}
                alt={carouselImage3}
              />
              <Carousel.Caption
                sx={{
                  paddingBottom: "200px",
                  width: "700px",
                  margin: "10px auto",
                }}
              >
                <p
                  style={{
                    fontFamily: "Great Vibes, cursive",
                    fontSize: "60px",
                    color: "#c49b63",
                    marginBottom: "30px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Welcome
                </p>
                <h2
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: "40px",
                    color: "#FFFFFF",
                    marginBottom: "30px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </h2>
                <h6
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    marginBottom: "30px",
                    textShadow: "1px 1px 1px #000",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </h6>
                <p>
                  <a
                    href="/list"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                    style={{
                      backgroundColor: "#c49b63",
                      color: "white",
                      marginBottom: "100px",
                    }}
                  >
                    View Menu
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* //! Section Info */}
        <section className="ftco-intro" style={{ margin: "40px 10%" }}>
          <div className="container-wrap">
            <div className="wrap d-md-flex align-items-xl-end">
              <div className="info">
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="text">
                      <h3
                        style={{
                          fontFamily: "Josefin Sans",
                          fontSize: "15px",
                          color: "#FFFFFFB3",
                        }}
                      >
                        <PhoneIcon sx={{ color: "#c49b63" }} /> 000 (123) 456
                        7890
                      </h3>
                      <p
                        style={{
                          lineHeight: "30px",
                          color: "#808080",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                        }}
                      >
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="icon">
                      <span className="icon-my_location"></span>
                    </div>
                    <div className="text">
                      <h3
                        style={{
                          fontFamily: "Josefin Sans",
                          fontSize: "15px",
                          color: "#FFFFFFB3",
                        }}
                      >
                        <MyLocationIcon sx={{ color: "#c49b63" }} /> 198 West
                        21th Street
                      </h3>
                      <p
                        style={{
                          lineHeight: "30px",
                          color: "#808080",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                        }}
                      >
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                    <div className="icon">
                      <span className="icon-clock-o"></span>
                    </div>
                    <div
                      className="text"
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "Josefin Sans",
                          fontSize: "15px",
                          color: "#FFFFFFB3",
                        }}
                      >
                        <AccessAlarmIcon sx={{ color: "#c49b63" }} /> Open
                        Monday-Friday
                      </h3>
                      <p
                        style={{
                          lineHeight: "30px",
                          color: "#808080",
                          fontFamily: "Poppins",
                          fontSize: "16px",
                        }}
                      >
                        8:00am - 9:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //! Section 2 start */}
        <Box className="sec2">
          <section
            className="ftco-about d-md-flex"
            style={{ position: "relative", backgroundColor: "#1e1c1c" }}
          >
            <Box className="one-half" sx={{ width: "100%" }}>
              <img
                className="img1"
                src={aboutImg}
                alt={aboutImg}
                width={"100%"}
              />
            </Box>
            <Box
              className="one-half ftco-animate"
              style={{ position: "absolute", right: "10%" }}
            >
              <Box
                className="overlap"
                style={{
                  backgroundColor: "#121212a7",
                  width: "600px",

                  marginTop: "20%",
                  borderRadius: "20px",
                }}
              >
                <Box className="heading-section ftco-animate">
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
                </Box>

                <Box>
                  <p
                    style={{
                      margin: "20px 20px",
                      paddingBottom: "20px",
                      lineHeight: "30px",
                      color: "#808080",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country. But nothing
                    the copy said could convince her and so it didn’t take long
                    until a few insidious Copy Writers ambushed her, made her
                    drunk with Longe and Parole and dragged her into their
                    agency, where they abused her for their.
                  </p>
                </Box>
              </Box>
            </Box>
          </section>
        </Box>
        {/* //! Section 3 start */}
        <Box>
          <section
            style={{
              backgroundColor: "#C49B63",
              height: "600px",
              paddingTop: "60px",
            }}
            className="ftco-section ftco-services"
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4 ftco-animate"
                  style={{ textAlign: "center" }}
                >
                  <div className="media d-block text-center block-6 services">
                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                      <span className="flaticon-choices"></span>
                      <img style={{ width: "100px" }} src={order} alt={order} />
                    </div>
                    <div>
                      <h3
                        style={{ fontFamily: "Josefin Sans" }}
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

                <div
                  className="col-md-4 ftco-animate"
                  style={{ textAlign: "center" }}
                >
                  <div className="media d-block text-center block-6 services">
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
                        style={{ fontFamily: "Josefin Sans" }}
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
                  <div className="media d-block text-center block-6 services">
                    <div className="icon d-flex justify-content-center align-items-center mb-5">
                      <span className="flaticon-coffee-bean"></span>
                      <img
                        style={{ width: "100px" }}
                        src={quality}
                        alt={quality}
                      />
                    </div>
                    <div className="media-body">
                      <h3
                        style={{ fontFamily: "Josefin Sans" }}
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
        </Box>
        {/* //! Section 4 start */}
        <Box>
          <section style={{ color: "#FFFFFFB3" }} className="ftco-section">
            <Box className="container">
              <Box
                // style={{ marginBottom: "100px" }}
                className="row justify-content-center pb-3"
              >
                <Box
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </Box>
              </Box>
              <div className="row drinks">
                <div className="col-md-3">
                  <div className="menu-entry">
                    <img style={{ width: "100%" }} src={menu1} alt={menu1} />
                    <div className="text text-center pt-4">
                      <h3>
                        <a
                          style={{
                            fontFamily: "Josefin Sans",
                            fontSize: "18px",
                            textDecoration: "none",
                            color: "#FFFFFFB3",
                          }}
                          href="/list"
                        >
                          CAPUCCINO
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
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                      <p className="price">
                        <span>$5.90</span>
                      </p>
                      <p>
                        {/* <Button
                          className="btn btn-dark btn-outline-light"
                          style={{
                            marginBottom: "60px",
                            backgroundColor: "#c49b63",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </Button> */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="menu-entry">
                    <img style={{ width: "100%" }} src={menu2} alt={menu2} />
                    <div className="text text-center pt-4">
                      <h3>
                        <a
                          style={{
                            fontFamily: "Josefin Sans",
                            fontSize: "18px",
                            textDecoration: "none",
                            color: "#FFFFFFB3",
                          }}
                          href="/list"
                        >
                          {" "}
                          MACCHIATO
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
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                      <p className="price">
                        <span>$5.90</span>
                      </p>
                      <p>
                        {/* <Button
                          className="btn btn-dark btn-outline-light"
                          style={{
                            marginBottom: "60px",
                            backgroundColor: "#c49b63",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </Button> */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="menu-entry">
                    <img style={{ width: "100%" }} src={menu3} alt={menu3} />
                    <div className="text text-center pt-4">
                      <h3>
                        <a
                          style={{
                            fontFamily: "Josefin Sans",
                            fontSize: "18px",
                            textDecoration: "none",
                            color: "#FFFFFFB3",
                          }}
                          href="/list"
                        >
                          {" "}
                          LATTE
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
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                      <p className="price">
                        <span>$5.90</span>
                      </p>
                      <p>
                        {/* <Button
                          className="btn btn-dark btn-outline-light"
                          style={{
                            marginBottom: "60px",
                            backgroundColor: "#c49b63",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </Button> */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="menu-entry">
                    <img style={{ width: "100%" }} src={menu4} alt={menu4} />
                    <div className="text text-center pt-4">
                      <h3>
                        <a
                          style={{
                            fontFamily: "Josefin Sans",
                            fontSize: "18px",
                            textDecoration: "none",
                            color: "#FFFFFFB3",
                          }}
                          href="/list"
                        >
                          FRAPPE
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
                        A small river named Duden flows by their place and
                        supplies
                      </p>
                      <p className="price">
                        <span>$5.90</span>
                      </p>
                      <p>
                        {/* <Button
                          className="btn btn-dark btn-outline-light"
                          style={{
                            marginBottom: "60px",
                            backgroundColor: "#c49b63",
                            color: "white",
                          }}
                        >
                          Add to Cart
                        </Button> */}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => navigateToList()}
                  variant="outlined"
                  className="btn btn-dark btn-outline-light"
                  style={{
                    width: "200px",
                    margin: "40px auto",
                    marginBottom: "60px",

                    borderColor: "#c49b63",
                    color: "white",
                  }}
                >
                  View Full Menu
                </Button>
              </div>
            </Box>
          </section>
        </Box>
        {/* //! Section 5 */}
        <section className="ftco-gallery">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div
                className="col-md-3 ftco-animate"
                style={{ padding: "5px 0px" }}
              >
                <img
                  style={{ height: "100%" }}
                  className="d-block w-100"
                  src={gallery1}
                  alt={gallery1}
                />

                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </div>
              <div
                style={{ padding: "5px 0px" }}
                className="col-md-3 ftco-animate"
              >
                <img
                  style={{ height: "100%" }}
                  className="d-block w-100"
                  src={gallery2}
                  alt={gallery2}
                />
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </div>
              <div
                style={{ padding: "5px 0px" }}
                className="col-md-3 ftco-animate"
              >
                <img
                  style={{ height: "100%" }}
                  className="d-block w-100"
                  src={gallery3}
                  alt={gallery3}
                />
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </div>
              <div
                style={{ padding: "5px 0px" }}
                className="col-md-3 ftco-animate"
              >
                <img
                  style={{ height: "100%" }}
                  className="d-block w-100"
                  src={gallery4}
                  alt={gallery4}
                />
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //! Section 6 */}

        {/* //! Footer start */}
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
