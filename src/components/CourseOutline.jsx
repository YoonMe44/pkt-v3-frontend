import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const CourseOutline = () => {
  const [registeredStu, setregisteredStu] = useState(0);
  const [onlineStudent, setonlineStudent] = useState(0);
  const [trainers, settrainers] = useState(0);
  const registeredStuNum = 500; 
  const onlineStuNum = 1550; 
  const trainersNum = 7; 

  useEffect(() => {
    const timer1 = setInterval(() => {
      if (registeredStu < registeredStuNum) {
        setregisteredStu(registeredStu + 1);
      }
    }, 8);

    const timer2 = setInterval(() => {
      if (onlineStudent < onlineStuNum) {
        setonlineStudent(onlineStudent + 1);
      }
    }, 8);

    const timer3 = setInterval(() => {
      if (trainers < trainersNum) {
        settrainers(trainers + 1);
      }
    }, 8);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [registeredStu, onlineStudent, trainers, registeredStuNum, onlineStuNum, trainersNum]);

  return (
    <>
        <h2 className="text-2xl text-red-600	font-semibold text-center mb-4">Our Courses & Batches</h2>
        <div className="md:flex mx-auto w-2/3 p-4 m-4 justify-center shadow-md rounded-3xl">
          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center">
              <Image
                src="static/images/registeredStudent.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Registred student</label>
              <p className="text-2xl text-orange-500 font-medium">
                {registeredStu}
              </p>
          </div>
          
          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center">
              <Image
                src="static/images/onlineStudent.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Online Student</label>
              <p className="text-xl text-orange-500 font-medium">
                {onlineStudent}
              </p>
          </div>

          <div className="md:w-1/3 flex-1 p-4 bg-white flex flex-col items-center">
              <Image
                src="static/images/trainer.svg"
                width={70}
                height={70}
                alt="registered student"
              />
              <label className="md:text-lg text-gray-800">Trainers</label>
              <p className="text-xl text-orange-500 font-medium">
                {trainers}
              </p>
          </div>

        </div>
    </>
  )
};
export default CourseOutline;
