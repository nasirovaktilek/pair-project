import React from "react";
import image from "../../assets/images/image_1.jpg";
import image1 from "../../assets/images/image_2.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <>
      <footer
        className="ftco-footer ftco-section img"
        style={{ marginTop: "30px" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans",
                    fontSize: " 16px",
                    marginBottom: "30px",
                  }}
                >
                  ABOUT US
                </h2>
                <p
                  style={{
                    color: "#FFFFFFB3",
                    fontFamily: "Poppins",
                    fontSize: " 16px",
                    lineHeight: "35px",
                  }}
                >
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans",
                    fontSize: " 16px",
                    marginBottom: "30px",
                  }}
                >
                  RESENT BLOG
                </h2>
                <div className="block-21 mb-4 d-flex">
                  <img
                    className="blog-img mr-4"
                    src={image1}
                    alt={image1}
                    width={100}
                    height={100}
                  />
                  <div
                    style={{
                      color: "#FFFFFFB3",
                      fontFamily: "Poppins",
                      marginLeft: "20px",
                    }}
                    className="text"
                  >
                    <h3 className="heading">
                      <a
                        style={{
                          color: "#FFFFFFB3",
                          fontFamily: "Poppins",
                          marginLeft: "20px",
                          textDecoration: "none",
                          fontSize: "15px",
                        }}
                        href="#"
                      >
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    {/* <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> Sept 15, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <img
                    className="blog-img mr-4"
                    src={image}
                    alt={image}
                    width={100}
                    height={100}
                  />
                  <div
                    style={{
                      color: "#FFFFFFB3",
                      fontFamily: "Poppins",
                      marginLeft: "20px",
                    }}
                    className="text"
                  >
                    <h3 className="heading">
                      <a
                        style={{
                          color: "#FFFFFFB3",
                          fontFamily: "Poppins",
                          marginLeft: "20px",
                          textDecoration: "none",
                          fontSize: "15px",
                        }}
                        href="#"
                      >
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      {/* <div>
                        <a href="#">
                          <span className="icon-calendar"></span> Sept 15, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans",
                    fontSize: " 16px",
                    marginBottom: "30px",
                  }}
                >
                  SERVICES
                </h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block">
                      Cooked
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Deliver
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Quality Foods
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Mixed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans",
                    fontSize: " 16px",
                    marginBottom: "30px",
                    marginLeft: "25px",
                  }}
                >
                  HAVE A QUESTIONS?
                </h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span
                        className="text"
                        style={{
                          color: "#FFFFFFB3",
                          fontFamily: "Poppins",
                          fontSize: " 16px",
                          lineHeight: "35px",
                        }}
                      >
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                style={{
                  color: "#FFFFFFB3",
                  fontFamily: "Poppins",
                  fontSize: " 16px",
                }}
              >
                MADE WITH <FavoriteIcon /> FROM KATYA & AKTILEK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
