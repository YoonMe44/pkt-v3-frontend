import Image from "next/image";
import PurchaseHistory from "@/components/PurchaseHistory";

const MyPage = () => {
  return (
    <div>
      <div className="lg:pb-20 pb-4 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <div className="absolute top-0 right-0 -z-10 overflow-hidden">
          <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-20"
              src="/statics/images/batchTwo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <PurchaseHistory />
      </div>
    </div>
  );
};
export default MyPage;
