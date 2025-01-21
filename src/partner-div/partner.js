import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import partner11 from "../assets/partner11.png";
import partner12 from "../assets/partner12.png";
import partner13 from "../assets/partner13.png";

import "./partner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Partner() {
  return (
    <>
    <div className="partnerDiv">
    <div className="container">
    <h3 className="blueText">Our Partners</h3>
    <p className="partnerText">Leading insurers for your financial freedom</p>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          
        }}
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner9}></img>
            <img className="partnerImage" src={partner2}></img>
            <img className="partnerImage" src={partner3}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner4}></img>
            <img className="partnerImage" src={partner5}></img>
            <img className="partnerImage" src={partner6}></img>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner7}></img>
            <img className="partnerImage" src={partner8}></img>
            <img className="partnerImage" src={partner9}></img>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner10}></img>
            <img className="partnerImage" src={partner11}></img>
            <img className="partnerImage" src={partner12}></img>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner13}></img>
            <img className="partnerImage" src={partner2}></img>
            <img className="partnerImage" src={partner3}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner4}></img>
            <img className="partnerImage" src={partner5}></img>
            <img className="partnerImage" src={partner6}></img>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner7}></img>
            <img className="partnerImage" src={partner8}></img>
            <img className="partnerImage" src={partner9}></img>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner10}></img>
            <img className="partnerImage" src={partner11}></img>
            <img className="partnerImage" src={partner12}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner10}></img>
            <img className="partnerImage" src={partner11}></img>
            <img className="partnerImage" src={partner12}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner5}></img>
            <img className="partnerImage" src={partner6}></img>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner7}></img>
            <img className="partnerImage" src={partner8}></img>

          </div>
        </SwiperSlide><SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner9}></img>
            <img className="partnerImage" src={partner10}></img>

          </div>
        </SwiperSlide><SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner11}></img>
            <img className="partnerImage" src={partner12}></img>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageDiv">
            <img className="partnerImage" src={partner13}></img>


          </div>
        </SwiperSlide>
      </Swiper>
      </div></div>
    </>
  );
}
export default Partner;
