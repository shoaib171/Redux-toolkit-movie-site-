/** @format */

import React from "react";
import Img1 from "../../Common/images/img1.jpg";
import Img2 from "../../Common/images/img2.jpg";
import Img3 from "../../Common/images/img3.jpg";
import Img4 from "../../Common/images/img4.jpg";

const Header = (props) => {
  const data = props;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="First--part animate__animated animate__backInLeft col-lg-6 col-md-6 col-sm-12">
            <h3 className="Brand fs-1 fw-bold my-5 py-5 text-white">
              {data.title}
            </h3>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 my-3 ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img
                    src={Img1}
                    className="d-block w-100"
                    alt="IMG--Slide"
                    height="400px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Img2}
                    className="d-block w-100"
                    alt="IMG--Slide"
                    height="400px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Img3}
                    className="d-block w-100"
                    alt="IMG--Slide"
                    height="400px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Img4}
                    className="d-block w-100"
                    alt="IMG--Slide"
                    height="400px"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
