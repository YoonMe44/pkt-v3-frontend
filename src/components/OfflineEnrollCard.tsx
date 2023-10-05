import Image from "next/image"
const OfflineEnrollCard = () => {
    return (
      <div>
        <div className="w-full bg-custom-white-4 rounded-[30px] shadow-custom px-3 md:px-4 py-4  mt-6 md:py-4 lg:py-0">
          <div className="flex  lg:flex-row md:flex-col flex-col justify-evenly items-center">
            <div className="w-1/2 sm:ml-0 flex flex-col md:flex-col lg:flex-row">
              <Image
                src="/statics/images/Poe2.jpg"
                width={70}
                height={60}
                alt="enroll-img"
                className=" rounded-full mx-auto"
              />
              <div className="text-center">
                <p className="text-md lg:text-xl">Instructor</p>
                <p className="text-red-main text-md lg:text-xl">
                  Poe Kyi Thar
                </p>
              </div>
            </div>
            <hr className="w-[4px] grow-0 bg-gray-dark h-[170px] hidden lg:block md:hidden mx-3" />
            <div className="w-1/2 text-center sm:border-t-4 md:border-t-4 lg:border-none">
              <p className="text-sm lg:text-xl text-gray-darker">
                Enroll Fees
              </p>
              <p className="text-red-main font-medium text-lg lg:text-xl">180,000 MMK</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default OfflineEnrollCard;