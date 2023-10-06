import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter from 'next/router'
import React, { useState, useEffect } from "react";
import RedButton from "./RedButton";

const Nav: React.FC = () => {
  const router = useRouter(); // Use useRouter
  const [activeNav, setActiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showClassroom, setShowClassRoom] = useState(false);
  console.log(showClassroom);
  const handleNavLinkClick = (navItem: string) => {
    setActiveNav(navItem);
  };
  return (
    <nav className="border-gray-200  dark:bg-gray-900 lg:bg-gradient-to-b lg:from-opacity-17 lg:to-opacity-0 lg:backdrop-blur-[8.5px]">
      <div className="max-w-[90%] flex lg:justify-between justify-between mx-auto p-4"> 
        <div>
          <Image
            src="/statics/images/logo/main-logo.svg"
            alt="main-logo.svg"
            width={80}
            height={250}
          />
        </div>
        <div className="flex md:order-2">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center float-right font-medium flex flex-col p-4 md:p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="pt-0 hidden lg:block">
                <Link href="#">
                  <Image
                    src="/statics/images/mm.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </Link>
              </li>
              <li className="pt-0 hidden lg:block">
                <Link href="#">
                  <Image
                    src="/statics/images/japan.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </Link>
              </li>
              <li className="pt-0 hidden lg:block">
                <Link href="#">
                  <Image
                    src="/statics/images/uk.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </Link>
              </li>
              <li>
                <RedButton title="Login" link="/login" />
                {/* <button type="button" className="text-white text-md bg-gradient-to-r from-[#aa0a11] via-red-300 to-[#ffcb08] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#aa0a11] dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button> */}
              </li>
            </ul>
          </div>

          <button
            className={` ${
              isMenuOpen
                ? " z-10 "
                : "  ease-in-out delay-300 duration-300 bg-custom-white-4"
            } shadow-card rounded-full h-fit border flex flex-col gap-1 justify-center py-5 px-4 lg:hidden md:hidden relative top-0 right-3`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <div
              className={`w-5 h-0.5 bg-red-main ${
                isMenuOpen
                  ? " -rotate-45 delay-75 ease-in duration-300 translate-y-1"
                  : "i -rotate-0 delay-75 ease-in duration-300 "
              } `}
            ></div>
            <div
              className={`w-5 h-0.5 bg-red-main ${isMenuOpen ? "hidden" : ""} `}
            ></div>
            <div
              className={`w-5 h-0.5 bg-red-main ${
                isMenuOpen
                  ? "rotate-45 delay-75 ease-in duration-300 -translate-y-0.5"
                  : "rotate-0 delay-75 ease-in duration-300 "
              } `}
            ></div>
          </button>

          <div
            className={`${
              isMenuOpen
                ? "flex  ease-in-out duration-[1000ms]  translate-x-0 "
                : " flex ease-in-out duration-[1000ms]  -translate-y-[500px] "
            }  space-y-6 lg:hidden md:hidden  backdrop-blur-[3px] shadow-custom bg-custom-white-17  flex-col px-4 py-6 rounded-b-xl absolute top-0 right-0  items-center`}
          >
            <div className="h-7"></div>
            <Link
              href={""}
              className={`${
                activeNav === "home"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("home")}
            >
              Home
            </Link>
            <Link
              href={""}
              className={`${
                activeNav === "courses"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("courses")}
            >
              Courses
            </Link>
            <Link
              href={""}
              className={`${
                activeNav === "about us"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("about us")}
            >
              About Us
            </Link>
            <Link
              href={""}
              className={`${
                activeNav === "contact us"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("contact us")}
            >
              Contact us
            </Link>
            <Link
              href={""}
              className={`${
                activeNav === "news"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("news")}
            >
              News
            </Link>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#aa0a11] via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
            >
              Login
            </button>
            <div className="flex space-x-3">
              <Image
                src="/statics/images/mm.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
              <Image
                src="/statics/images/japan.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
              <Image
                src="/statics/images/uk.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
            </div>
          </div>
        </div>
        <div
          className={`justify-between hidden w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-language"
        >
          <ul className="items-center pt-3 font-medium flex flex-col p-4 md:pt-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                  activeNav === "home"
                    ? "text-red-main border-b-[3px] border-red-500"
                    : "text-black"
                } md:bg-transparent hover:text-red-main`}
                onClick={() => handleNavLinkClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                  activeNav === "about"
                    ? "text-red-main !important border-b-[3px] border-red-500 !important"
                    : "text-black"
                } md:bg-transparent hover:text-red-main`}
                onClick={() => handleNavLinkClick("about")}
              >
                About Us
              </Link>
            </li>
            <li
              className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                activeNav === "courses"
                  ? "text-red-main border-b-[3px] border-red-500"
                  : "text-black"
              } md:bg-transparent hover:text-red-main`}
              onClick={() => handleNavLinkClick("courses")}
              onMouseEnter={() => setShowClassRoom(true)}
              onMouseLeave={() => setShowClassRoom(false)}
            >
              <ul className="relative">
                Courses
                <li
                  className={`bg-white text-red-main border-b-4 border-red-main rounded-lg p-2 text-xs  absolute w-[180%] ${
                    showClassroom ? "" : "hidden"
                  }`}
                >
                  <Link href={'/courses'}>Offline Classroom</Link>
                </li>
                <li
                  className={`bg-white text-red-main border-b-4 border-red-main p-2 text-xs rounded-lg absolute  w-[180%] top-16  ${
                    showClassroom ? "" : "hidden"
                  }`}
                >
                  <Link href={'/courses'}>Online Classroom</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/news"
                className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                  activeNav === "news"
                    ? "text-red-main border-b-[3px] border-red-500"
                    : " text-black"
                } md:bg-transparent hover:text-red-main`}
                onClick={() => handleNavLinkClick("news")}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                  activeNav === "contact"
                    ? "text-red-main border-b-[3px] border-red-500"
                    : " text-black"
                } md:bg-transparent hover:text-red-main`}
                onClick={() => handleNavLinkClick("contact")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                  activeNav === "faq"
                    ? "text-red-main border-b-[3px] border-red-500"
                    : " text-black"
                } md:bg-transparent hover:text-red-main`}
                onClick={() => handleNavLinkClick("faq")}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
