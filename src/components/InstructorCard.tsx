import MoreBtn from "./MoreBtn";
import Instructor from "./Instructor";
import { Instructure } from "@/types";

interface InstructorCardProps {
  instructureDetail : Instructure
}
const InstructorCard = ({instructureDetail}: InstructorCardProps) => {
  const {name, category} = instructureDetail;
    return (
      <div>
        <div className="px-5 mb-4">
          <div className="bg-custom-white-17 shadow-card rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl w-full mb-7" />
            <p className="text-center">{name}</p>
            <p className="text-center text-red-500">{category}</p>
            <MoreBtn link="/Instructor" />
          </div>
        </div>
      </div>
    );
}
export default InstructorCard;