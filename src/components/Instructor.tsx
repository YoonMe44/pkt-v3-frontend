import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoreBtn from "./MoreBtn";
import InstructorCard from "./InstructorCard";

import { Instructure } from "@/types";

interface InstructorProps{
  instructures: Instructure[]
}

const Instructor = ({instructures}: InstructorProps) => {
    const showPost = instructures.length < 4 ? instructures.length : 4; 
    const settings = {
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000,
      slidesToScroll: 1,
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0%",
      speed: 500,
      initialSlide: 0,
      slidesToShow: showPost,
      responsive: [
        // {
        //   breakpoint: 2736, 
        //   settings: {
        //     slidesToShow: 5, 
        //   },
        // },
        // {
        //   breakpoint: 1824, 
        //   settings: {
        //     slidesToShow: 4, 
        //   },
        // },
        // {
        //   breakpoint: 1280, 
        //   settings: {
        //     slidesToShow: 4,
        //   },
        // },
        // {
        //   breakpoint: 1024, 
        //   settings: {
        //     slidesToShow: 3,
        //   },
        // },
        // {
        //   breakpoint: 768, 
        //   settings: {
        //     slidesToShow: 2,
        //   },
        // },
        // {
        //   breakpoint: 640, 
        //   settings: {
        //     slidesToShow: 1,
        //   },
        // },
      ],
    };
  return (
    <div className="">
      <p className="text-center text-red-main font-medium text-2xl mb-[30px] mt-[50px]">
        Our Trainers
      </p>
      <Slider {...settings} className="w-[86%] mx-auto  border-none!important">
        {instructures.map(instructor => (
          <>
            <InstructorCard instructureDetail={instructor} />
          </>
        ))}
        
      </Slider>
    </div>
  );
};
export default Instructor;
