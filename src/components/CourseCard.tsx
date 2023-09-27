import Image from "next/image";
import RedButton from "./RedButton";
const CourseCard = () => {
    return (
      <div>
        <div className="w-[27%] bg-custom-white-4 rounded-[30px] pb-[20px]">
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
          <RedButton title="More Detail" />
        </div>
      </div>
    );
}
export default CourseCard;