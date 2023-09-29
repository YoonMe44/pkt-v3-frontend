import Image from "next/image"
const EnrollCard = () => {
    return (
      <div>
        <p className=" text-red-main font-medium text-2xl">Enroll Batch</p>
        <div className=" mx-auto rounded-xl  w-[700px] bg-white-17 ">
          <div className="grid grid-cols-3 h-2/5 w-[700px]">
            <div className="grid grid-cols-2">
              <Image
                width={50}
                height={400}
                className="rounded-[30px] mx-auto"
                src="/statics/images/poe2.jpg"
                alt=""
              />
              <div className="text-left">
                <p className=" font-medium">Instructor</p>
                <p className="text-red-main font-medium">Poe Kyi Thar</p>
              </div>
            </div>
            <hr className="w-[4px] h-full  bg-gray-dark m-auto" />
            <div className="text-center">
              <p className=" font-medium">Enroll</p>
              <p className="text-red-main font-medium">180,000 MMK</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default EnrollCard;