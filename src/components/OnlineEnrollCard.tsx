import Image from "next/image"
const OnlineEnrollCard = () => {
    return (
      <div className="w-full">
        <div className="w-full bg-custom-white-4 rounded-[30px] shadow-custom pb-10 mt-6">
          <div className="flex justify-evenly items-center w-full">
            <div className="grid grid-cols-2">
              <Image
                src="/statics/images/Poe2.jpg"
                width={60}
                height={60}
                alt="enroll-img"
                className=" rounded-[100px] mx-auto "
              />
              <div className="text-center">
                <p className="text-xl text-gray-darker font-medium  ">
                  Instructor
                </p>
                <p className="text-red-main font-medium text-xl">
                  Poe Kyi Thar
                </p>
              </div>
            </div>
            <hr className="w-[4px] grow-0 bg-gray-dark h-[170px]" />
            <div className="grow-0 w-[225px] text-center">
              <p className="text-xl text-gray-darker font-medium">
                Enroll Fees
              </p>
              <p className="text-red-main font-medium text-xl">180,000 MMK</p>
            </div>
          </div>
          <hr className="w-full grow-0 bg-gray-dark h-1" />
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
                <p className="text-gray-darker">Start Date</p>
                <p className="text-gray-darker">Class Day/Time</p>
                <p className="text-gray-darker">Duration</p>
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
                <p className="text-gray-darker">Aug 30,2021</p>
                <p className="text-gray-darker">
                  Mon,Tue,Wed,Thu,Fri(09:00 ~ 11:00)
                </p>
                <p className="text-gray-darker">Duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default OnlineEnrollCard;