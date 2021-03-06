import React from "react";
import image from "../../assets/images/image_1.jpg";
import image1 from "../../assets/images/image_2.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import PhoneEnabledSharpIcon from "@mui/icons-material/PhoneEnabledSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <footer
        className="ftco-footer ftco-section img"
        style={{ backgroundColor: "#1e1c1c" }}
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
                    marginTop: "30px",
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
                    width: "70%",
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
            <div
              style={{ height: "100px" }}
              className="col-lg-4 col-md-6 mb-5 mb-md-5"
            >
              <div className="ftco-footer-widget mb-4">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans",
                    fontSize: " 16px",
                    marginBottom: "30px",
                    marginTop: "30px",
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
                          width: "50%",
                        }}
                        href="#"
                      >
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
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
                    marginTop: "30px",
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
                    marginTop: "30px",
                  }}
                >
                  HAVE A QUESTIONS?
                </h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li style={{ marginBottom: "20px" }}>
                      <span className="icon icon-map-marker"></span>
                      <span
                        className="text"
                        style={{
                          color: "#FFFFFFB3",
                          fontFamily: "Poppins",
                          fontSize: " 16px",
                        }}
                      >
                        <LocationOnSharpIcon />
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li style={{ marginBottom: "20px" }}>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">
                          <PhoneEnabledSharpIcon />
                          +2 392 3929 210
                        </span>
                      </a>
                    </li>
                    <li style={{ marginBottom: "20px" }}>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">
                          <MailSharpIcon /> info@yourdomain.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div style={{ paddingLeft: "230px" }}>
              <InstagramIcon sx={{ color: "white", fontSize: "50px" }} />
              <TwitterIcon
                sx={{ color: "white", marginLeft: "20px", fontSize: "50px" }}
              />
              <FacebookIcon
                sx={{ color: "white", marginLeft: "20px", fontSize: "50px" }}
              />
            </div>
            <div style={{ heigth: "50px" }} className="col-md-12 text-center">
              <p
                style={{
                  color: "#FFFFFFB3",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                }}
              >
                MADE WITH <FavoriteIcon /> BY GROUP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
