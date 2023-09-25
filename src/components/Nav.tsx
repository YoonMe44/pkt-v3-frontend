import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from 'next/router'
import React, { useState, useEffect } from 'react';

const Nav: React.FC = () => {
  const router = useRouter(); // Use useRouter
  const [activeNav, setActiveNav] = useState('home');

  const handleNavLinkClick = (navItem: string) => {
    setActiveNav(navItem);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
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
            <ul className="items-center float-right font-medium flex flex-col p-4 md:p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='pt-0'>
                <Link href="#">
                  <Image
                    src="/statics/images/mm.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </Link>
              </li>
              <li className='pt-0'>
                <Link href="#">
                  <Image
                    src="/statics/images/japan.png"
                    alt="main-logo.svg"
                    width={20}
                    height={0}
                  />
                </Link>
              </li>
              <li className='pt-0'>
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
                <button type="button" className="focus:outline-none text-white bg-[#ED1C24] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
          <ul className="items-center pt-3 font-medium flex flex-col p-4 md:pt-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`mr-5 block py-2 pl-3 pr-4 ${activeNav === 'home' ? 'text-red-500 border-b-2 border-red-500' : 'text-black'
                    } md:bg-transparent md:p-0 hover:text-red-500`}
                onClick={() => handleNavLinkClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`mr-5 block py-2 pl-3 pr-4 ${activeNav === 'about' ? 'text-red-500 !important border-b-2 border-red-500 !important' : 'text-black'
                    } md:bg-transparent md:p-0 hover:text-red-500`}
                onClick={() => handleNavLinkClick('about')}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`mr-5 block py-2 pl-3 pr-4 ${activeNav === 'courses' ? 'text-red-500 border-b-2 border-red-500' : 'text-black'
                    } md:bg-transparent md:p-0 hover:text-red-500`}
                onClick={() => handleNavLinkClick('courses')}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className="mr-5 block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-red-main"
                aria-current="page">
                News
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className="mr-5 block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-red-main"
                aria-current="page">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-red-main"
                aria-current="page">
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
