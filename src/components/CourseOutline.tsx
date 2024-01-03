import { SidebarContext } from "@/components/Layouts/MainLayout";
import { language } from "@/lang/lang";
import Image from "next/image";
import React, { useContext } from "react";

const CourseOutline = () => {
  let { lang } = useContext(SidebarContext);

  return (
    <>
      <h2 className="text-2xl text-red-600 font-medium text-center mb-4">
        {language[lang].t1}
      </h2>
      <div className="grid  lg:grid-cols-3 md:grid-cols-3 lg:gap-[105px] md:gap-[20px] sm:gap-[30px] gap-[30px] p-4 lg:mx-[100px] md:mx-[60px] sm:mx-[150px] mx-[50px] justify-center rounded-3xl">
        <div className="flex-1 p-6 backdrop-blur-9 bg-transparent flex flex-col items-center rounded-2xl shadow-card">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main hover:-translate-y-2 ease-in-out duration-300 hover:border-b-8 border-red-800  flex items-center justify-center">
            <Image
              src="/statics/images/jpicon.svg"
              width={85}
              height={40}
              alt="registered student"
            />
          </div>
          <label className="md:text-lg text-center text-red-main font-bold mt-4"> {language[lang].ct1}</label>
          <p className="text-center text-sm font-medium">
            {language[lang].cp1}
          </p>
        </div>

        <div className="flex-1 p-4  backdrop-blur-9 bg-transparent  flex flex-col items-center shadow-card rounded-2xl">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main hover:-translate-y-2 ease-in-out duration-300 hover:border-b-8 border-red-800 flex items-center justify-center">
            <Image
              src="/statics/images/coding.svg"
              width={85}
              height={40}
              alt="online student"
            />
          </div>
          <label className="md:text-lg text-center text-red-main font-bold mt-4"> {language[lang].ct2}</label>
          <p className="text-sm text-center font-medium">
            {language[lang].cp2}
          </p>
        </div>

        <div className="flex-1 p-4  backdrop-blur-9 bg-transparent flex flex-col items-center shadow-card rounded-2xl">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main hover:-translate-y-2 ease-in-out duration-300 hover:border-b-8 border-red-800 flex items-center justify-center">
            <Image
              src="/statics/images/ITPEC.svg"
              width={85}
              height={40}
              alt="trainer"
            />
          </div>
          <label className="md:text-lg text-center text-red-main font-bold mt-4"> {language[lang].ct3}</label>
          <p className="text-sm text-center font-medium">
            {language[lang].cp3}
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseOutline;
