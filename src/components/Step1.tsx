import React from "react";
import Image from "next/image";
const Step1: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="grid grid-rows-8 gap-2">
          <p className="font-medium text-[22px] text-gray-500">Batch Id</p>
          <p className="font-medium text-[22px] text-gray-500">
            Types of Class
          </p>
          <p className="font-medium text-[22px] text-gray-500">instructor</p>
          <p className="font-medium text-[22px] text-gray-500">Email</p>
          <p className="font-medium text-[22px] text-gray-500">Fees</p>
          <p className="font-medium text-[22px] text-gray-500">Lecture</p>
          <p className="font-medium text-[22px] text-gray-500">Total minutes</p>
          <p className="font-medium text-[22px] text-gray-500">Lessons</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid grid-row-8 items-stretch">
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
            <p className="font-medium text-[22px] text-gray-500">bch-000007</p>
            <p className="font-medium text-[22px] text-gray-500">
              Online Course
            </p>
            <p className="font-medium text-[22px] text-gray-500">
              Poe Kyi Thar
            </p>
            <p className="font-medium text-[22px] text-gray-500">
              poekyithar@gmail.com
            </p>
            <p className="font-medium text-[22px] text-red-main">180,000 MMK</p>
            <p className="font-medium text-[22px] text-gray-500">20</p>
            <p className="font-medium text-[22px] text-gray-500">120 min</p>
            <p className="font-medium text-[22px] text-gray-500">30</p>
          </div>
        </div>
      </div>
      <hr className="w-[80%] bg-gray-dark h-[2px] mt-[50px] mx-auto" />
    </div>
  );
};

export default Step1;

