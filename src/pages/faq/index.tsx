import Image from "next/image";
import PageTitle from "../../components/PageTitle";
import Instructor from "@/components/Instructor";
import OurCapacity from "@/components/OurCapacity";
import { language } from "@/lang/lang";
import { useContext } from "react";
import { SidebarContext } from "@/Layouts/MainLayout";

const FAQ = () => {
  let { lang } = useContext(SidebarContext);
  const pageTitle = {
    title: language[lang].faq,
    content_1: "",
    content_2: "",
  };
  return (
    <div>
      {/* <div className="pb-20 -mt-20"> */}
      <div className="-mt-10 pb-24">
        <PageTitle pageTitle={pageTitle} />
      </div>
      {/* </div> */}

      <div className="absolute top-0 right-0 overflow-hidden z-[-1]">
        <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
          <Image
            width={1000}
            height={900}
            // layout="responsive"
            className="transform rotate-11 pt-20"
            src="/statics/images/batchTwo.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full shadow-custom bg-transparent backdrop-blur-9 rounded-3xl lg:p-24  p-10">
        <h1 className="lg:text-5xl text-3xl flex flex-col gap-3 text-red-main font-normal italic">
          <span>{language[lang].FAQ}</span> <span>{language[lang].FAQ1}</span> <span>{language[lang].FAQ2}</span>
        </h1>
      </div>
    </div>
  );
};

export default FAQ;
