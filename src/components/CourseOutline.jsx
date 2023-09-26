import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const CourseOutline = () => {
  

  return (
    <>
        <h2 className="text-2xl text-red-600	font-semibold text-center mb-4">Our Courses & Batches</h2>
        <div className="md:flex mx-auto w-2/3 p-4 m-4 space-x-4 justify-center rounded-3xl">
          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center shadow-md rounded-2xl">
              <Image
                src="static/images/registeredStudent.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Registred student</label>
              <p className="text-base">
                From basic to advanced level, we are teaching to pass the JLPT exam recognized by Japan
              </p>
          </div>
          
          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center shadow-md rounded-2xl">
              <Image
                src="static/images/onlineStudent.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Online Student</label>
              <p className="text-base">
                From basic to advanced level, we are teaching to pass the JLPT exam recognized by Japan
              </p>
          </div>

          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center shadow-md rounded-2xl">
              <Image
                src="static/images/trainer.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Trainers</label>
              <p className="text-base">
              From basic to advanced level, we are teaching to pass the JLPT exam recognized by Japan
              </p>
          </div>

        </div>
    </>
  )
};
export default CourseOutline;
