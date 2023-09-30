import Image from "next/image"
const OfflineEnrollCard = () => {
    return (
      <div>
        <div className="w-full bg-custom-white-4 rounded-[30px] shadow-custom  mt-6">
          <div className="flex justify-evenly items-center">
            <div className="grid grid-cols-2">
              <Image
                src="/statics/images/Poe2.jpg"
                width={60}
                height={60}
                alt="enroll-img"
                className=" rounded-[100px] mx-auto "
              />
              <div className="text-center">
                <p className="text-xl">Instructor</p>
                <p className="text-red-main font-medium text-xl">
                  Poe Kyi Thar
                </p>
              </div>
            </div>
            <hr className="w-[4px] grow-0 bg-gray-dark h-[170px]" />
            <div className="grow-0 w-[225px] text-center">
              <p className="text-xl">Enroll Fees</p>
              <p className="text-red-main font-medium text-xl">180,000 MMK</p>
            </div>
          </div>
        </div>
        
      </div>
    );
}
export default OfflineEnrollCard;