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
            <Link href={"/mypage/purchasehistory"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
                className=" absolute -left-10 top-8 fill-slate-500 hover:fill-red-main duration-200 ease-in-out s:pl-[10px]"
              >
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
              </svg>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="96"
                viewBox="0 0 23 96"
                fill="none"
                className=" rotate-[12px] "
              >
                <path
                  d="M15.3756 95.4299C5.47021 81.5665 0.20645 64.922 0.338689 47.8821C0.470935 30.8421 5.99239 14.2814 16.1117 0.573516L22.6005 5.36701C13.4932 17.7041 8.52384 32.6087 8.40483 47.9447C8.28581 63.2807 13.0232 78.2607 21.938 90.7377L15.3756 95.4299Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>

            <div className="relative">
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
              viewBox="0 0 23 96"
              fill="none"
              className=" rotate-90 absolute -top-[59px] left-[62px]"
            >
              <path
                d="M15.3756 95.4299C5.47021 81.5665 0.20645 64.922 0.338689 47.8821C0.470935 30.8421 5.99239 14.2814 16.1117 0.573516L22.6005 5.36701C13.4932 17.7041 8.52384 32.6087 8.40483 47.9447C8.28581 63.2807 13.0232 78.2607 21.938 90.7377L15.3756 95.4299Z"
                fill="#D9D9D9"
              />
            </svg>
            <Link href={"/mypage/profile"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
                className="absolute -top-14 left-14 fill-slate-500  hover:fill-red-main duration-200 ease-in-out"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="96"
                viewBox="0 0absolute 23 96"
                fill="none"
                className=" rotate-180  "
              >
                <path
                  d="M15.3756 95.4299C5.47021 81.5665 0.20645 64.922 0.338689 47.8821C0.470935 30.8421 5.99239 14.2814 16.1117 0.573516L22.6005 5.36701C13.4932 17.7041 8.52384 32.6087 8.40483 47.9447C8.28581 63.2807 13.0232 78.2607 21.938 90.7377L15.3756 95.4299Z"
                  fill="#ED1C24"
                />
              </svg>
              <Link href={"/mypage/register_courses"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                  className="absolute -right-10 top-8 rotate-90 fill-red-main duration-200 ease-in-out s:pr-[25px] s:mt-[14px]"
                >
                  <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </Link>
            </div>
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
