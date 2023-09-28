import Image from "next/image";
import PageTitle from "../../components/PageTitle";
import Instructor from "@/components/Instructor";
import OurCapacity from "@/components/OurCapacity";

const FAQ = () => {
  return (
    <div>
      <div className="pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <i className="text-[48px] text-red-main font-medium">
          <PageTitle title="FAQ" />
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
      <div className="w-full my-20 border shadow-card backdrop:blur-9 rounded-3xl lg:p-24 p-8">
        <h1 className="lg:text-5xl text-3xl flex flex-col gap-3 text-red-main font-normal italic">
          <span>Frequently</span> <span>asked</span> <span>questions</span>
        </h1>
      </div>
    </div>
  );
};

export default FAQ;
