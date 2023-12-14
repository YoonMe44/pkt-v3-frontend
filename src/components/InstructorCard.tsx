import { Instructors } from "@/types";

interface InstructorCardProps {
  instructureDetail: Instructors
}
const InstructorCard = ({ instructureDetail }: InstructorCardProps) => {
  const { name, id, profile_photo_path } = instructureDetail;
    return (
      <div key={id}>
        <div className="px-5 mb-4">
          <div className="bg-custom-white-17 shadow-card rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src={profile_photo_path} alt={name} className="rounded-3xl w-full mb-7" />
            <p className="text-center">{name}</p>
          </div>
        </div>
      </div>
    );
}
export default InstructorCard;