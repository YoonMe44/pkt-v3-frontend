import Link from "next/link";
import CourseCard from "./CourseCard";
import PageTitle from "./PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";
const CourseMain = () => {
  useEffect(() => {
    var menuBtn = document.querySelector(".menu-btn");
    var nav1 = document.querySelector(".nav-cat");
    var lineOne = document.querySelector(".menu-btn .line--1");
    var lineTwo = document.querySelector(".menu-btn .line--2");
    var lineThree = document.querySelector(".menu-btn .line--3");
    var link = document.querySelector(".nav-cat .nav-links");

    const handleClick = () => {
      nav1.classList.toggle("nav-opens");
      lineOne.classList.toggle("line-cross");
      lineTwo.classList.toggle("line-fade-out");
      lineThree.classList.toggle("line-cross");
      link.classList.toggle("fade-in");
    };

    menuBtn.addEventListener("click", handleClick);

    return () => {
      menuBtn.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <div className="pb-[231px] w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both"></div>
      <div className="absolute top-0 right-0 overflow-hidden -z-10">
        {/* <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-40"
              src="/statics/images/batch3.JPG"
              alt=""
            />
          </div>  */}
        <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
          <Image
            width={1000}
            height={900}
            // layout="responsive"
            className="transform rotate-11 pt-20"
            src="/statics/images/batchTwo.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-custom-white-17 w-full mx-auto shadow-custom rounded-[30px] pt-16 p-16 lg:mt-24 backdrop-blur-9">
        <div className="  w-[93%] mx-auto mb-5 ">
          <p className="searchTitle mb-[-55px] ml-28">Find your courses</p>
          <form className="search-focus">
            <input
              type="text"
              name="search bg-custom-white-17"
              className="search bg-"
              autoComplete="off"
            ></input>
          </form>
          <div className="absolute">
            <div className="menu-btn relative top-[30px] w-[69px] overflow:hidden bg-custom-white-17 cursor-pointer z-[3] shadow-card rounded-[30px] p-[20px] right-0">
              <div className="line line--1"></div>
              <div className="line line--2"></div>
              <div className="line line--3"></div>
            </div>
            <div className="classNamenav">
              <div className="nav-cat">
                <div className="nav-links">
                  <p className="navTitle">Categories</p>
                  <Link href="" className="link">
                    Japanese
                  </Link>
                  <Link href="" className="link">
                    English
                  </Link>
                  <Link href="" className="link">
                    ITPEC
                  </Link>
                  <Link href="" className="link">
                    Web development
                  </Link>
                  <hr className="w-2/3 bg-red-main h-1 mb-3"></hr>
                  <p className="navTitle">Class Names</p>
                  <Link href="" className="link">
                    Online Class
                  </Link>
                  <a href="" className="link">
                    Local Class
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <p className="searchTitle lg:ml-[4rem] sm:ml-[4rem] ml-[66px] mr-[28px] sm:text-[20px] text-[17Spx] lg:text-[24px] sm:mb-[-42px] mb-[-40px]">
                Find your courses
              </p>
              <form className="search-focus">
                <input
                  type="text"
                  name="search bg-custom-white-17"
                  className="search w-[50px] p-[13px] "
                  autoComplete="off"
                ></input>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[76%] grid grid-cols-3 gap-x-[60px] gap-y-[60px] mx-auto ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};
export default CourseMain;
