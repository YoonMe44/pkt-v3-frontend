import OfflineEnrollCard from "@/components/OfflineEnrollCard";
import OnlineEnrollCard from "@/components/OnlineEnrollCard";
import PageTitle from "@/components/PageTitle";
import RedButton from "@/components/RedButton";
import Image from "next/image";
const CourseDetail = () => {
  return (
    <div>
      <div className="pb-[231px] w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both"></div>
      <div className="absolute top-0 right-0 overflow-hidden -z-10">
        {/* <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
          <Image
            width={1000}
            height={900}
            className="transform rotate-11 pt-40"
            src="/statics/images/batch3.jpg"
            alt=""
          />
        </div> */}
      </div>
      <div className="w-full bg-custom-white-4 rounded-[30px] pb-[20px] pt-[40px] shadow-card lg:px-10">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/statics/images/n3.jpg"}
            width={500}
            height={500}
            alt=""
          />
          <h1 className="text-red-main text-xl font-medium py-4">
            Japanese Online
          </h1>
          <p className="text-sm md:text-lg text-justify text-slate-600 border-b-4 pb-6 w-3/4 lg:w-2/3 px-4 lg:px-24 md:px-20 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            cupiditate eaque doloribus est exercitationem optio laboriosam
            natus, itaque cum! Vero accusantium, voluptatibus odio quaerat nemo
            aut ut alias cupiditate laudantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam at dolore corporis deleniti
            sed debitis odio quod, illum, repellendus officiis minus, possimus
            dignissimos tempore dicta aspernatur cum earum officia sint!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-4/5 mx-auto">
          {/* <OfflineEnrollCard /> */}
          <OnlineEnrollCard />
          <div className="flex justify-end p-6">
            <RedButton title="Enroll" link="/courses/enroll" />
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 p-6 mx-auto">
          <OfflineEnrollCard />
          <OnlineEnrollCard />
        </div> */}
      </div>
    </div>
  );
};
export default CourseDetail;
