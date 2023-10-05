import Image from "next/image";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopPage from "@/components/TopPage";
import PageTitle from "@/components/PageTitle";
import MoreBtn from "@/components/MoreBtn";
const inter = Inter({subsets: ["latin"]});

import Instructor from "@/components/Instructor";
import CourseOutline from "@/components/CourseOutline";
import OurCapacity from "@/components/OurCapacity";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const pageTitle = {
    title: "PKT Education Center",
    content_1: "Plan your",
    content_2: "future with",
  };

  const instructures = [
    {
      name: "Naing Aung Linn",
      category: "web trainer",
    },
    {
      name: "Naing Aung Linn",
      category: "web trainer",
    },
    {
      name: "Naing Aung Linn",
      category: "web trainer",
    },
    {
      name: "Naing Aung Linn",
      category: "web trainer",
    },
  ];

  return (
    <div>
      {/* MainVisual */}
      <div className="w-full pb-20 right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <div className="pb-2">
          <PageTitle pageTitle={pageTitle} />
        </div>
      </div>
      {/* Course description */}
      <div>
        <CourseOutline />
      </div>
      {/* About Us School */}
      <h2 className="text-red-600 text-2xl text-center font-medium mt-8">
        About Us
      </h2>

      <div className="mb-10 mx-auto p-4 md:flex sm:flex flex justify-center space-x-4 rounded-3xl">
        <div className="w-[82%] lg:w-[84%] md:w-[85%] sm:w-[82%] bg-white p-8 items-center shadow-card rounded-2xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 lg:gap-7 md:gap-4">
          <div>
            <div className="flex justify-center">
              <Image
                src="/statics/images/batchTwo.png"
                width={411}
                height={329}
                alt="batchTwo"
              />
            </div>
          </div>
          <div>
            <div className="lg:pb-10 md:pb-0">
              <label className="text-red-main md:text-lg font-bold flex justify-center">
                Welcome to PKT Education Center
              </label>
            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
                Currently, more than 1,500 participants who attended online have
                been taught.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Capacity */}
      <div>
        <OurCapacity />
      </div>

      {/* Trainers */}
      <div>
        <Instructor instructures={instructures} />
      </div>

      {/* Managing Director */}

      <div className=" p-4 mx-auto my-10 md:flex lg:flex flex justify-center space-x-4 rounded-3xl">
        <div className="w-[90%] lg:w-[84%] md:w-[85%] sm:w-[86%] bg-white p-8 items-center grid lg:grid-cols-3 md:grid-cols-2 gap-4 rounded-2xl shadow-card">
          <div className="">
            <div className="flex justify-center">
              <Image
                src="/statics/images/Poe2.jpg"
                width={229}
                height={300}
                alt="registered student "
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:pb-10 pb-2 text-center">
              <label className="">
                <span className="text-red-main md:text-lg font-bold">
                  Poe Kyi Thar
                </span>
                <span className="text-gray-400 pl-4">Managing Director</span>
              </label>
            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NewsCard />
      </div>
    </div>
  );
}
