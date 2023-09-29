import PageTitle from "@/components/PageTitle";
import Image from "next/image";
const CourseDetail = () => {
    return (
      <div>
        <div className="pb-[231px] w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
          <i className="text-[48px] text-red-main font-medium">
            <PageTitle title="Courses" />
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
        <div className="w-full bg-custom-white-4 rounded-[30px] pb-[20px] shadow-card">
          <Image
            width={1000}
            height={1000}
            className="rounded-[30px]"
            src="/statics/images/n3.jpg"
            alt=""
          />
        </div>
      </div>
    );
}
export default CourseDetail;