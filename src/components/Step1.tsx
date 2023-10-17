import React from "react";
import Image from "next/image";
const Step1: React.FC = () => {
  return (
    <div>
      <div className="flex justify-evenly ">
        <div className="grid grid-rows-8 gap-2">
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-[12px] text-gray-500">
            Batch Id
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-[12px] text-gray-500">
            Types of Class
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            Email
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            instructor
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            Fees
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            Lecture
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            Total minutes
          </p>
          <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
            Lessons
          </p>
        </div>
        <div className="flex">
          <div className="grid grid-row-8 items-stretch w-full">
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
            <Image
              src="/statics/images/polygon_white.svg"
              width={15}
              height={15}
              alt="enroll-img"
              className="mx-auto mr-2"
            />
          </div>
          <div className="grid grid-row-8 gap-2">
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              bch-000007
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              Online Course
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              Poe Kyi Thar
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              poekyithar@gmail.com
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-red-main text-[12px]">
              180,000 MMK
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              20
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              120 min
            </p>
            <p className="font-medium lg:text-[22px] md:text-[18px] sm:text-base text-gray-500 text-[12px]">
              30
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[80%] bg-gray-dark h-[2px] mt-[50px] mx-auto" />
    </div>
  );
};
export default Step1;