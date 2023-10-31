import Image from "next/image";
import PageTitle from "./PageTitle";
const InstructorDetail = () => {
  const pageTitle = {
    title: "",
    content_1: "",
    content_2: "",
  };
  return (
    <div>
      <div>
        <div className=" w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
          <PageTitle pageTitle={pageTitle} />
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
        </div>
        <div className="bg-custom-white-17 sm:bg-transparent sm:shadow-none w-[50%] mx-auto lg:shadow-custom rounded-[30px] pt-16 pb-16  backdrop-blur-9">
          <p className="text-center w-[80%] mx-auto text-[25px] text-red-main">
            Naing Aung Linn
          </p>
          <Image
            width={250}
            height={250}
            className="mx-auto rounded-[30px]"
            src="/naing.jpg"
            alt=""
          />
          <p className="text-justify w-[80%] mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            inventore voluptates quis fugit molestias natus, iusto dignissimos
            sit at delectus ex voluptatibus illo non beatae provident veritatis?
            Odio, voluptates! Qui! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque inventore voluptates quis fugit molestias
            natus, iusto dignissimos sit at delectus ex voluptatibus illo non
            beatae provident veritatis? Odio, voluptates! Qui! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Itaque inventore voluptates
            quis fugit molestias natus, iusto dignissimos sit at delectus ex
            voluptatibus illo non beatae provident veritatis? Odio, voluptates!
            Qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            inventore voluptates quis fugit molestias natus, iusto dignissimos
            sit at delectus ex voluptatibus illo non beatae provident veritatis?
            Odio, voluptates! Qui!
          </p>
        </div>
      </div>
    </div>
  );
};
export default InstructorDetail;
