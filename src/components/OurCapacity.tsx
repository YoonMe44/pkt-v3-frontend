import { SidebarContext } from "@/components/Layouts/MainLayout";
import { language } from "@/lang/lang";
import Image from "next/image";
import React, {useState, useEffect, useContext} from "react";

const CourseOutline = () => {
  const [registeredStu, setregisteredStu] = useState(0);
  const [onlineStudent, setonlineStudent] = useState(0);
  const [trainers, settrainers] = useState(0);
  const registeredStuNum = 500;
  const onlineStuNum = 1550;
  const trainersNum = 7;
  let { lang } = useContext(SidebarContext);

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
  }, [
    registeredStu,
    onlineStudent,
    trainers,
    registeredStuNum,
    onlineStuNum,
    trainersNum,
  ]);

  return (
    <div className="backdrop-blur-9 bg-transparent">
      <h2 className="text-2xl text-red-600	font-medium text-center mb-4">
        Our Courses & Batches
        {language[lang].t3}
      </h2>
      <div className="md:flex mx-auto w-[82%]  p-4 m-4 justify-center shadow-card rounded-3xl">
        <div className="md:w-1/3 flex-1 p-4 flex flex-col items-center">
          <Image
            src="statics/images/registeredStudent.svg"
            width={70}
            height={70}
            alt="registered student"
          />
          <label className="md:text-lg text-gray-800"> {language[lang].cb1}</label>
          <p className="text-2xl text-orange-500 font-medium">
            {registeredStu}
          </p>
        </div>

        <div className="md:w-1/3 flex-1 p-4 flex flex-col items-center">
          <Image
            src="statics/images/onlineStudent.svg"
            width={70}
            height={70}
            alt="registered student"
          />
          <label className="md:text-lg text-gray-800"> {language[lang].cb2}</label>
          <p className="text-xl text-orange-500 font-medium">{onlineStudent}</p>
        </div>

        <div className="md:w-1/3 flex-1 p-4 flex flex-col items-center">
          <Image
            src="statics/images/trainer.svg"
            width={70}
            height={70}
            alt="registered student"
          />
          <label className="md:text-lg text-gray-800"> {language[lang].cb3}</label>
          <p className="text-xl text-orange-500 font-medium">{trainers}</p>
        </div>
      </div>
    </div>
  );
};
export default CourseOutline;
