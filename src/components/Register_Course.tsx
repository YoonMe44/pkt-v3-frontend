import Register_Courses from "@/pages/mypage/register_courses";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register_Course = () => {
  return (
    <div className="sm:w-[80%] w-[83%] md:w-[80%] lg:w-[60%]  mx-auto mt-[250px] ">
      <div className="bg-[#F0F0F0] shadow-custom container  mx-auto rounded-lg lg:rounded-3xl my-4 pt-4 overflow-hidden  ">
        <div className="flex justify-between px-4">
          <Link href={"/mypage"}>
            <Image
              src={"/statics/images/back.png"}
              width={30}
              height={30}
              alt="back_photo"
            />
          </Link>
          <h1 className="lg:text-2xl text-red-main font-medium text-center text-sm md:text-xl">
            Register Courses
          </h1>
          <div></div>
        </div>
        <div className="relative mx-auto w-fit my-[70px] flex ">
          <div className="flex">
            <div>
              <Link href={"/mypage/register_courses"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                  className="absolute -right-10 top-8 rotate-90 fill-red-main"
                >
                  <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </Link>
            </div>

            <div>
              <Image
                src={"/statics/images/Poe2.jpg"}
                width={100}
                height={100}
                alt="user-img"
                className="rounded-full"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="96"
              viewBox="0 0absolute 23 96"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M15.3756 95.4299C5.47021 81.5665 0.20645 64.922 0.338689 47.8821C0.470935 30.8421 5.99239 14.2814 16.1117 0.573516L22.6005 5.36701C13.4932 17.7041 8.52384 32.6087 8.40483 47.9447C8.28581 63.2807 13.0232 78.2607 21.938 90.7377L15.3756 95.4299Z"
                fill="#ED1C24"
              />
            </svg>
          </div>
        </div>
        <div className="w-full mx-auto pb-[45px] flex justify-center items-center">
          <div className="rounded-3xl shadow-[4.0px_5.0px_8.0px_rgba(0,0,0,0.40)]">
            <div>
              <Image
                src={"/statics/images/online.png"}
                width={220}
                height={100}
                alt="Register Course"
                className="rounded-3xl mb-[12px]"
              />
            </div>
            {/* <img src="img/online.jpg" class="teacher"> */}
            <h5 className="text-xl flex justify-center text-red-600 mt-[15px]">
              Free Basic Class
            </h5>
            <p className="text-gray-600 items-center flex justify-center mt-[4px]">
              Online
            </p>
            <div className="flex justify-center mb-[20px]">
              <button className="bg-red-600 text-white py-2 px-4 rounded-full mt-3 flex justify-center items-center">
                <Link
                  href="#"
                  className="text-lg font-medium flex justify-center"
                >
                  More Details
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Course;
