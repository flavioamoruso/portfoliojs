import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Sliderone from "../assets/image/slider1.jpg";
import Slidertwo from "../assets/image/slider2.jpg";

export default function Slider() {
  return (
    <>
      <div className="home-hero" data-aos="fade-left">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">Chi sono?</h2>
            <p className="brand-color">
              Sono diplomato in ragioneria con indirizzo{" "}
              <strong>informatico</strong>, sin da piccolo ho avuto una forte
              propensione verso la <strong>tecnologia</strong> per poi
              ritrovarmi a farne un <strong>lavoro</strong> e una passione a
              tutti gli effetti
            </p>
          </div>

          <h4>"In rebus dubis plurimum est audacia"</h4>
          <p>
            Questo è uno dei miei motti preferiti, purchè penso che nelle
            situazioni dove ci accorgiamo di toccare il fondo dobbiamo
            dimostrare di potercela fare per risalire più in alto possibile fino
            a toccare il cielo
          </p>
        </div>
        <div className="home-hero-img focus-in-contract-bck">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                style={{ width: "396px", height: "396px" }}
                src={Sliderone}
                alt="slider-1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Slidertwo}
                style={{ width: "396px", height: "396px" }}
                alt="slider-2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export { Slider };
