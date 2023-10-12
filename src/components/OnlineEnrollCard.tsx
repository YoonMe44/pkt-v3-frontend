import Image from "next/image";
const OnlineEnrollCard = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:bg-custom-white-4 md:bg-custom-white-4 lg:rounded-[30px] Lg:shadow-custom md:rounded-[30px] md:shadow-custom pb-10 mt-6">
        <div className="flex justify-evenly items-center w-full flex-col  lg:flex-row">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
            <Image
              src="/statics/images/Poe2.jpg"
              width={60}
              height={60}
              alt="enroll-img"
              className=" rounded-[100px] mx-auto "
            />
            <div className="text-center">
              <p className="text-xl">Instructor</p>
              <p className="text-red-main font-medium text-xl">Poe Kyi Thar</p>
            </div>
          </div>
          <hr className="w-[4px] grow-0 bg-gray-dark h-[170px] hidden lg:block " />
          <div className="grow-0 w-[225px] text-center">
            <p className="text-xl">Enroll Fees</p>
            <p className="text-red-main font-medium text-xl mb-[15px] lg:mb-0 sm:mb-[15px] md:mb-0">
              180,000 MMK
            </p>
          </div>
        </div>
        <hr className="w-full grow-0 bg-gray-dark h-1 " />
        <div className="flex justify-evenly items-center mt-10">
          <div className="flex">
            <div className="grid grid-row-3 gap-5 grow-0 items-center">
              <Image
                src="/statics/images/polygon_white.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
              <Image
                src="/statics/images/polygon_white.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
              <Image
                src="/statics/images/polygon_white.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
            </div>
            <div className="grid grid-row-3 gap-5 grow-0">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Start Date
              </p>
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Class Day/Time
              </p>
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Duration
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="grid grid-row-3 gap-5 items-center">
              <Image
                src="/statics/images/polygon_red.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
              <Image
                src="/statics/images/polygon_red.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
              <Image
                src="/statics/images/polygon_red.svg"
                width={15}
                height={15}
                alt="enroll-img"
                className="mx-auto mr-2"
              />
            </div>
            <div className="grid grid-row-3 gap-5">
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Aug 30,2021
              </p>
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Week Day(09:00 ~ 11:00)
              </p>
              <p className="lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]">
                Duration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnlineEnrollCard;
