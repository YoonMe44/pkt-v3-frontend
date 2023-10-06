import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoreBtn from "./MoreBtn";

const Instructor = () => {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToScroll: 1,
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0%",
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 2736, 
          settings: {
            slidesToShow: 5, 
          },
        },
        {
          breakpoint: 1824, 
          settings: {
            slidesToShow: 4, 
          },
        },
        {
          breakpoint: 1280, 
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640, 
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
    <div className="bg-slate-100">
      <p className="text-center text-red-500 font-semibold text-2xl mb-[30px] mt-[50px]">
        Our Trainers
      </p>
      <Slider {...settings} className="w-4/5 mx-auto  border-none!important">
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl w-full mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Instructor;
