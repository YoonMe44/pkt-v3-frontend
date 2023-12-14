import React, { useContext } from "react";
import Slider from "react-slick";
import Image from "next/image";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoreBtn from "./MoreBtn";
import InstructorCard from "./InstructorCard";

import { Instructors } from "@/types";
import { language } from "@/lang/lang";
import { SidebarContext } from "@/Layouts/MainLayout";

interface InstructorProps{
  instructors: Instructors[]
}

const Instructor = ({instructors}: InstructorProps) => {
    const showPost = instructors.length < 4 ? instructors.length : 4; 
    let { lang } = useContext(SidebarContext);
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
      slidesToShow: showPost,
      responsive: [
        {
          breakpoint: 2736, 
          settings: {
            slidesToShow: 4, 
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
    <div className="">
      <p className="text-red-main text-2xl text-center font-medium mb-[30px] mt-[50px]">
        {language[lang].t4}
      </p>
      <Slider {...settings} className="w-[86%] mx-auto border-none!important">
        {instructors.map(instructor => (
          <>
            <InstructorCard instructureDetail={instructor} />
          </>
        ))}
        
      </Slider>
    </div>
  );
};
export default Instructor;
