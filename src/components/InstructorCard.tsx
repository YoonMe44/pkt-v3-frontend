import MoreBtn from "./MoreBtn";
const InstructorCard = () => {
    return (
      <div>
        <div className="pl-[30px] pr-[30px] mb-4">
          <div className="bg-custom-white-17 shadow-custom rounded-3xl pl-[34px] pr-[34px] w-full mx-auto pt-[18px] pb-[18px]">
            <img src="naing.jpg" alt="" className="rounded-3xl w-full mb-7" />
            <p className="text-center">Naing Aung Linn</p>
            <p className="text-center text-red-500">Web Trainer</p>
            <MoreBtn />
          </div>
        </div>
      </div>
    );
}
export default InstructorCard;