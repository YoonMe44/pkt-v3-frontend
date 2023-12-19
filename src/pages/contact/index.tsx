import PageTitle from "@/components/PageTitle";
import Contact from "../../components/Contact"; // Rename the imported component
import Image from "next/image";
import { language } from "@/lang/lang";
import { SidebarContext } from "@/Layouts/MainLayout";
import { useContext } from "react";

const ContactUsPage = () => {
  let { lang } = useContext(SidebarContext);

  const pageTitle = {
    title: language[lang].contact,
    content_1: language[lang].future2,
    content_2: "",
  };
  return (
    <>
      <div>
        <div className="pb-20">
          <PageTitle pageTitle={pageTitle} />
        </div>
        <div className="absolute top-0 right-0 overflow-hidden z-[-1] bounce">
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
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default ContactUsPage;
