import Image from "next/image";
const OnlineEnrollCard = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full bg-custom-white-4 rounded-[30px] shadow-custom pb-10 mt-6">
        <div className="flex pt-4 lg:pt-0  lg:flex-row md:flex-col flex-col justify-evenly items-center">
          <div className="lg:w-1/2 w-full sm:ml-0 flex pb-2 flex-col md:flex-col lg:flex-row">
            <Image
              src="/statics/images/Poe2.jpg"
              width={70}
              height={60}
              alt="enroll-img"
              className=" rounded-full mx-auto"
            />
            <div className="text-center">
              <p className="text-md lg:text-xl lg:mt-2">Instructor</p>
              <p className="text-red-main text-md">Poe Kyi Thar</p>
            </div>
          </div>
          <hr className="w-[4px] grow-0 bg-gray-dark h-[170px] hidden lg:block md:hidden mx-3" />
          <div className="lg:w-1/2 w-full text-center">
            <p className="text-md lg:text-xl text-gray-darker">Enroll Fees</p>
            <p className="text-red-main font-medium text-md lg:text-md">
              180,000 MMK
            </p>
          </div>
        </div>
        <hr className="w-full grow-0 bg-gray-dark h-1" />
        <div className="flex justify-between p-4">
          <div className="flex gap-4 ml-3">
            <ul className="flex flex-col grow-0">
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-sm text-gray-darker">
              <li>Start Date</li>
              <li>Class Day/Time</li>
              <li>Duration</li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex flex-col grow-0">
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li className="mb-[130%]">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 text-sm text-gray-darker">
              <li>Aug 30, 2021</li>
              <li>Weekdays(09:00 ~ 11:00)</li>
              <li>Duration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnlineEnrollCard;
