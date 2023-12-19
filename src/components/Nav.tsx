import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router"; // Import useRouter from 'next/router'
import React, {useState, useEffect, useContext} from "react";
import RedButton from "./RedButton";
import { SidebarContext } from "@/Layouts/MainLayout";
import { language } from "@/lang/lang";

const Nav: React.FC = () => {
  const router = useRouter(); // Use useRouter
  const path = router.route;
  const [activeNav, setActiveNav] = useState("");
  let {lang,setLang} = useContext(SidebarContext);

  useEffect(() => {
    if (router.asPath.includes("/faq")) {
      setActiveNav("faq");
    } else if (router.asPath.includes("/about")) {
      setActiveNav("about");
    } else if (router.asPath.includes("/courses")) {
      setActiveNav("courses");
    } else if (router.asPath.includes("/contact")) {
      setActiveNav("contact");
    } else if (router.asPath.includes("/about")) {
      setActiveNav("courses");
    } else if (router.asPath.includes("/news")) {
      setActiveNav("news");
    } else if (router.asPath) {
      setActiveNav("home");
    }
  }, [router]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showClassroom, setShowClassRoom] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // console.log(openProfile);
  const handleNavLinkClick = (navItem: string) => {
    setActiveNav(navItem);
  };

  return (
    <nav className="border-gray-200  dark:bg-gray-900 lg:bg-gradient-to-b lg:from-opacity-17 lg:to-opacity-0 lg:backdrop-blur-[8.5px]">
      <div className="max-w-[90%] flex lg:justify-between justify-between mx-auto p-4">
        <div>
          <Link href={"/"}>
            <Image
              src="/statics/images/logo/main-logo.svg"
              alt="main-logo.svg"
              width={80}
              height={250}
            />
          </Link>
        </div>
        <div className="flex md:order-2">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center float-right font-medium flex flex-col p-4 md:p-3 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="pt-0 hidden lg:block">
                <button onClick={() => setLang(2)}>
                  <Image
                    src="/statics/images/mm.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </button>
              </li>
              <li className="pt-0 hidden lg:block">
                <button onClick={() => setLang(1)}>
                  <Image
                    src="/statics/images/Japan.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </button>
              </li>
              <li className="pt-0 hidden lg:block">
                <button onClick={() => setLang(0)}>
                  <Image
                    src="/statics/images/uk.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </button>
              </li>
              <li>
                {/* <RedButton title="Login" link="/login" /> */}
                {/* <button type="button" className="text-white text-md bg-gradient-to-r from-[#aa0a11] via-red-300 to-[#ffcb08] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#aa0a11] dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button> */}
                {
                  /*
                  <Link href={"/mypage"} className=" rounded-full relative">
                  <Image
                    src={"/statics/images/Poe2.jpg"}
                    width={45}
                    height={45}
                    alt="user-img"
                    className="rounded-full border-solid border-2 border-gray-400"
                  />
                </Link>
                 */
                }
              </li>
            </ul>
          </div>
          <div className="mt-4 mx-2">
            {/*
            <RedButton title="Application Form" link="/apply" />

            <Link
              href={"/mypage"}
              className=" rounded-full relative block md:hidden lg:hidden"
            >
              <Image
                src={"/statics/images/Poe2.jpg"}
                width={35}
                height={35}
                alt="user-img"
                className="rounded-full border-solid border-2 border-gray-400"
              />
            </Link>
            */}
          </div>
          <button
            className={` ${
              isMenuOpen ? " z-50 " : "  ease-in-out delay-300 duration-300"
            }  h-fit flex flex-col gap-1 justify-center  mt-6 lg:hidden md:hidden relative top-0 left-[5%]`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <div
              className={`w-7 h-0.5 bg-red-main ${
                isMenuOpen
                  ? " -rotate-45 delay-75 ease-in duration-300 translate-y-1"
                  : "i -rotate-0 delay-75 ease-in duration-300 "
              } `}
            ></div>
            <div
              className={`w-7 h-0.5 bg-red-main ${isMenuOpen ? "hidden" : ""} `}
            ></div>
            <div
              className={`w-7 h-0.5 bg-red-main ${
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
            } z-40 space-y-6 lg:hidden md:hidden  backdrop-blur-[3px] shadow-custom bg-custom-white-17  flex-col px-4 py-6 rounded-b-xl absolute top-0 right-0  items-center`}
          >
            <div className="h-7"></div>
            <Link
              href={"/"}
              className={`${
                activeNav === "home"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("/")}
            >
              {language[lang].home}
            </Link>
            
            <Link
              href={"/about"}
              className={`${
                activeNav === "about"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("about")}
            >
              {language[lang].aboutus}
            </Link>
            <Link
              href={"/contact"}
              className={`${
                activeNav === "contact us"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("contact us")}
            >
              {language[lang].contact}
            </Link>
            <Link
              href={"/news"}
              className={`${
                activeNav === "news"
                  ? "text-red-main border-b-[3px] border-red-main"
                  : "text-black"
              } text-sm font-medium`}
              onClick={() => setActiveNav("news")}
            >
              {language[lang].news}
            </Link>

           <div className="flex space-x-3">
              <button onClick={() => setLang(2)}>

              <Image
                src="/statics/images/mm.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
              </button>
              <button onClick={() => setLang(1)}>
              <Image
                src="/statics/images/Japan.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
              </button>
              <button onClick={() => setLang(0)}>

              <Image
                src="/statics/images/uk.png"
                alt="main-logo.svg"
                width={20}
                height={0}
              />
              </button>
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
                {language[lang].home}
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
                {language[lang].aboutus}
              </Link>
            </li>
            <li
              className={`mr-5 md:mr-0 block py-2 lg:text-lg text-sm font-semibold pb-[10px] ${
                activeNav === "courses"
                  ? "text-red-main border-b-[3px] border-red-500"
                  : "text-black"
              } md:bg-transparent hover:text-red-main`}
              onMouseEnter={() => setShowClassRoom(true)}
              onMouseLeave={() => setShowClassRoom(false)}
            >
              <ul className="relative">
                <Link
                  href={"/courses"}
                  onClick={() => handleNavLinkClick("courses")}
                  onMouseEnter={() => setShowClassRoom(true)}
                  onMouseLeave={() => setShowClassRoom(false)}
                >
                  {language[lang].courses}
                </Link>
                <li
                  className={`bg-white text-red-main border-b-4 border-red-main rounded-lg p-2 text-xs  absolute w-[180%] ${
                    showClassroom ? "" : "hidden"
                  }`}
                  onMouseEnter={() => setShowClassRoom(true)}
                  onMouseLeave={() => setShowClassRoom(false)}
                >
                  <Link href={"/courses/offline"}> {language[lang].local}</Link>
                </li>
                <li
                  className={`bg-white text-red-main border-b-4 border-red-main p-2 text-xs rounded-lg absolute  w-[180%] top-16  ${
                    showClassroom ? "" : "hidden"
                  }`}
                  onMouseEnter={() => setShowClassRoom(true)}
                  onMouseLeave={() => setShowClassRoom(false)}
                >
                  <Link href={"/courses/online"}>{language[lang].online}</Link>
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
                {language[lang].news}
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
                {language[lang].contact}
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
                {language[lang].faq}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
