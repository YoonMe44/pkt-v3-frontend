import Head from "next/head";
import Image from "next/image";
import PageTitle from "../../components/PageTitle";
import Instructor from "@/components/Instructor";
import OurCapacity from "@/components/OurCapacity";
import CourseOutline from "@/components/CourseOutline";
import { GetServerSideProps, NextPage } from "next";
import { Instructors } from "@/types";
import axios from "axios";
import { SidebarContext } from "@/components/Layouts/MainLayout";
import { useContext } from "react";
import { language } from "@/lang/lang";

interface AboutProps {
  instructors: Instructors[]
}

const About: NextPage<AboutProps> = ({ instructors }) => {
  let { lang } = useContext(SidebarContext);
  const pageTitle = {
    title: language[lang].readmore ,
    content_1: language[lang].aboutus ,
    content_2: "",
  };
  return (
    <div>
      <div className="pb-20">
        <PageTitle pageTitle={pageTitle} />
      </div>
      <div className="absolute top-0 right-0 overflow-hidden z-[-1] bounce">
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
      <div className=" w-full lg:w-[82%] mx-auto  bg-transparent shadow-custom backdrop-blur-9 rounded-3xl lg:p-24 md:p-24 p-4 pt-[20%]">
        <div className=" justify-between  hidden lg:flex">
          <div className="w-2/3">
            <div className="items-center">
              <h1 className="lg:my-5 font-sans">
                <span className=" font-medium mr-3 ">{language[lang].title1}</span>{" "}
                <span className="text-lg text-red-main font-medium">
                  {language[lang].title1_1}
                </span>
              </h1>
              <p className=" font-sans text-md">
                {language[lang].content1}
              </p>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  {language[lang].title2}
                </h1>
                <p className=" font-sans text-md">
                  {language[lang].content2}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  {language[lang].title3}
                </h1>
                <p className=" font-sans text-md">
                  {language[lang].content3}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  {language[lang].title4}
                </h1>
                <p className=" font-sans text-md pr-24">
                  {language[lang].content4}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center gap-10">
            <Image
              src={"/statics/images/classroom.jpg"}
              width={280}
              height={130}
              alt="classroom"
              className="rounded-2xl"
            />

            <Image
              src={"/statics/images/classroom.jpg"}
              width={280}
              height={130}
              alt="classroom"
              className="rounded-2xl"
            />

            <Image
              src={"/statics/images/team.jpg"}
              width={280}
              height={130}
              alt="team"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:hidden">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-5 mb-6">
              <h1 className="lg:my-5 font-sans text-center">
                <span className=" font-medium mr-3">{language[lang].title1}</span>{" "}
                <span className="text-lg text-red-main font-medium">
                  {language[lang].title1_1}
                </span>
              </h1>
              <p className=" font-sans text-md">
                {language[lang].content1}
              </p>
              <Image
                src={"/statics/images/classroom.jpg"}
                width={330}
                height={300}
                alt="classroom"
                className="rounded-3xl items-center mx-auto"
              />
            </div>
            <div className="flex flex-col gap-5 mb-6">
              <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg text-center">
                {language[lang].title2}
              </h1>
              <p className=" font-sans text-md">
                {language[lang].content2}
              </p>
              <Image
                src={"/statics/images/classroom.jpg"}
                width={330}
                height={300}
                alt="classroom"
                className="rounded-3xl items-center mx-auto"
              />
            </div>
            <div className="flex flex-col gap-5 mb-6">
              <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg text-center">
                {language[lang].title3}
              </h1>
              <p className=" font-sans text-md">
                {language[lang].content3}
              </p>
              <Image
                src={"/statics/images/team.jpg"}
                width={330}
                height={300}
                alt="team"
                className="rounded-3xl items-center mx-auto"
              />
            </div>
            <div className="flex flex-col gap-5 mb-6">
              <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg text-center">
                {language[lang].title4}
              </h1>
              <p className=" font-sans text-md">
                {language[lang].content4}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <OurCapacity />
      </div>
      <div className="my-16">
        <Instructor instructors={instructors} />
      </div>
    </div>
  );
};
export default About;




export const getServerSideProps: GetServerSideProps<AboutProps> = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let instructorsResponse: Instructors[] = [];

  try {
    const res = await axios.get(`${baseUrl}/api/users`)
    instructorsResponse = res.data.data;

  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      instructors: instructorsResponse
    }
  }
}