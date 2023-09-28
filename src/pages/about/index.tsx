import Head from "next/head";
import Image from "next/image";
import PageTitle from "../../components/PageTitle";
import Instructor from "@/components/Instructor";
import OurCapacity from "@/components/OurCapacity";

const About = () => {
  return (
    <div>
      <div className="pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <i className="text-[48px] text-black font-medium">
          <PageTitle title="Read More" />
        </i>
        <i className="text-[48px] text-red-main font-medium">
          <PageTitle title="About Us" />
        </i>
      </div>
      <div className="absolute top-0 right-0 overflow-hidden -z-10">
        <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
          <Image
            width={1000}
            height={900}
            className="transform rotate-11 pt-40"
            src="/statics/images/batch3.JPG"
            alt=""
          />
        </div>
      </div>
      <div className="w-full lg:shadow-card lg:backdrop:blur-9 rounded-3xl lg:p-24 md:p-24 p-2">
        <div className=" justify-between  hidden lg:flex">
          <div className="w-2/3">
            <div className="items-center">
              <h1 className="lg:my-5 font-sans">
                <span className=" font-medium mr-3 ">Welcome to</span>{" "}
                <span className="text-lg text-red-main font-medium">
                  PKT Education Center
                </span>
              </h1>
              <p className=" font-sans text-md">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
                Currently, more than 1,500 participants who attended online have
                been taught
              </p>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  OUR INTENSION
                </h1>
                <p className=" font-sans text-md">
                  Paving the way for the improvement of the lives of young
                  people who are financially disadvantaged but work hard It is
                  intended for young people who want to become technicians by
                  combining Japanese studies and technology.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  OUR VISION
                </h1>
                <p className=" font-sans text-md">
                  Paving the way for the improvement of the lives of young
                  people who are financially disadvantaged but work hard It is
                  intended for young people who want to become technicians by
                  combining Japanese studies and technology.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="items-center">
                <h1 className="lg:my-5 font-sans text-red-main font-medium text-lg">
                  ABOUT US
                </h1>
                <p className=" font-sans text-md pr-24">
                  The founder, Mrs. Poe Kyi Thar, taught technical subjects in
                  Japan and gained experience as a technician in a technology
                  company in Tokyo, Japan. In 2014, we opened a branch office in
                  Burma and have been providing online technology services. It
                  was opened as a Japanese language school in 4th month of 2018,
                  and since 2019, it has been teaching outside courses.
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
                <span className=" font-medium mr-3">Welcome to</span>{" "}
                <span className="text-lg text-red-main font-medium">
                  PKT Education Center
                </span>
              </h1>
              <p className=" font-sans text-md">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
                Currently, more than 1,500 participants who attended online have
                been taught
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
                OUR INTENSION
              </h1>
              <p className=" font-sans text-md">
                Paving the way for the improvement of the lives of young people
                who are financially disadvantaged but work hard It is intended
                for young people who want to become technicians by combining
                Japanese studies and technology.
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
                OUR VISION
              </h1>
              <p className=" font-sans text-md">
                Utilizing technology and Japanese, Burma's workplace To produce
                students who can go to work in Japanese workplaces. To stand as
                the best and most honest school in Burma for students who want
                to study in Japan.
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
                ABOUT US
              </h1>
              <p className=" font-sans text-md">
                The founder, Mrs. Poe Kyi Thar, taught technical subjects in
                Japan and gained experience as a technician in a technology
                company in Tokyo, Japan. In 2014, we opened a branch office in
                Burma and have been providing online technology services. It was
                opened as a Japanese language school in 4th month of 2018, and
                since 2019, it has been teaching outside courses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <OurCapacity />
      </div>
      <div className="my-16">
        <Instructor />
      </div>
    </div>
  );
};
export default About;
