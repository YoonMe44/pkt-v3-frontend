import Image from "next/image";
import RedButton from "./RedButton";
const CourseCard = () => {
    return (
      <div className="lg:w-full ">
        <div className="w-full bg-custom-white-4 rounded-[30px] pb-[20px] shadow-card">
          <Image
            width={1000}
            height={1000}
            className="rounded-[30px]"
            src="/statics/images/n3.jpg"
            alt=""
          />
          <p className="text-center text-red-main mt-[8px] font-sans font-medium text-[20px]">
            Basic N3
          </p>
          <p className="text-center m-[10px]">Onlne Class</p>
          <div className="flex justify-center">
            <RedButton title="More Detail" />
          </div>
      
        </div>
      </div>
    );
}
export default CourseCard;