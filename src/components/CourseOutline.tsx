import Image from "next/image";
import React from "react";

const CourseOutline = () => {
  return (
    <>
      <h2 className="text-2xl text-red-600 font-semibold text-center mb-4">
        Course Outline
      </h2>
      <div className="grid grid-cols-3 gap-[105px] p-4 mx-[100px] justify-center rounded-3xl">
        <div className="flex-1 p-6 bg-white flex flex-col items-center rounded-2xl shadow-card">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main flex items-center justify-center">
            <Image
              src="/statics/images/jpicon.svg"
              width={85}
              height={40}
              alt="registered student"
            />
          </div>
          <label className="md:text-lg text-red-main font-bold mt-4">Japanese Language</label>
          <p className="text-center text-sm font-medium">
            From basic to advanced level, we are teaching to pass the JLPT exam recognized by Japan
          </p>
        </div>

        <div className="flex-1 p-4 bg-white flex flex-col items-center shadow-card rounded-2xl">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main flex items-center justify-center">
            <Image
              src="/statics/images/coding.svg"
              width={85}
              height={40}
              alt="online student"
            />
          </div>
          <label className="md:text-lg text-red-main font-bold mt-4">Website Design and Coding</label>
          <p className="text-sm text-center font-medium">
          It teaches you the basics of designing and coding so that you can design a website yourself
          </p>
        </div>

        <div className="flex-1 p-4 bg-white flex flex-col items-center shadow-card rounded-2xl">
          <div className="rounded-full w-[114px] h-[114px] bg-red-main flex items-center justify-center">
            <Image
              src="/statics/images/ITPEC.svg"
              width={85}
              height={40}
              alt="trainer"
            />
          </div>
          <label className="md:text-lg text-red-main font-bold mt-4">ITPEC ( IT,FE )</label>
          <p className="text-sm text-center font-medium">
          We are now teaching to obtain a Japan-accredited computer technician certificate
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseOutline;
