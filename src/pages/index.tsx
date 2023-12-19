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
import { GetServerSideProps, NextPage } from "next";
import { News, Instructors } from "@/types";
import axios from "axios";
import { useContext } from "react";
import { SidebarContext } from "@/Layouts/MainLayout";
import { language } from "@/lang/lang";
import RedButton from "@/components/RedButton";


interface HomeProps {
  news: News[]
  instructors: Instructors[]
}


const Home: NextPage<HomeProps> = ({ news,instructors }) => {
  let { lang } = useContext(SidebarContext);

  const pageTitle = {
    title: language[lang].center ,
    content_1: language[lang].plan,
    content_2: language[lang].future,
  }; 

  return (
    <div>
      {/* MainVisual */}
      <div className="w-full right-0">
        <div className="pb-20">
          <PageTitle pageTitle={pageTitle} />
          <div className="mt-4 bounce">
            <RedButton title="Application Form" link="/apply" />
          </div>
        </div>
        <div className="absolute top-0 right-0 overflow-hidden z-[-1] bounce bounce">
          <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px] oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-20"
              src="/statics/images/batchTwo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Course description */}
      <div>
        <CourseOutline />
      </div>
      {/* About Us School */}
      <h2 className="text-red-600 text-2xl text-center font-medium mt-8">
        {language[lang].t2}
      </h2>

      <div className="mb-10 mx-auto p-4 md:flex sm:flex flex justify-center space-x-4 rounded-3xl">
        <div className="w-[82%] lg:w-[84%] md:w-[85%] sm:w-[82%] backdrop-blur-9 bg-transparent p-8 items-center shadow-card rounded-2xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 lg:gap-7 md:gap-4">
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
                {language[lang].abt}
              </label>
            </div>
            <div>
              <p className="text-base">{language[lang].abc}</p>
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
        <Instructor instructors={instructors} />
      </div>

      {/* Managing Director */}

      <div className=" p-4 mx-auto my-10 md:flex lg:flex flex justify-center space-x-4 rounded-3xl">
        <div className="w-[90%] lg:w-[84%] md:w-[85%] sm:w-[86%]]bg-custom-white-17 backdrop-blur-9  p-8 items-center grid lg:grid-cols-3 md:grid-cols-2 gap-4 rounded-[30px] shadow-card">
          <div className="">
            <div className="flex justify-center">
              <Image
                src="/statics/images/Poe2.jpg"
                width={229}
                height={300}
                alt="Poe2"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:pb-10 pb-2 text-center">
              <label className="">
                <span className="text-red-main md:text-lg font-bold">
                  {language[lang].ceo_name}
                </span>
                <span className="text-gray-400 pl-4">
                  {language[lang].label}
                </span>
              </label>
            </div>
            <div>
              <p className="text-base">{language[lang].ceo_content}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NewsCard news={news} />
      </div>
    </div>
  );
}

export default Home;


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let newsResponse: News[] = [];
  let instructorsResponse: Instructors[] = [];
  
  try {
    const res = await axios.get(`${baseUrl}/api/news`)
    newsResponse = res.data.data;
  } catch (e) {
    console.log(e)
  }

  try{
    const res = await axios.get(`${baseUrl}/api/users`)
    instructorsResponse = res.data.data;

  }catch (e) {
    console.log(e)
  }

  return {
    props: {
      news: newsResponse,
      instructors: instructorsResponse
    }
  }
}