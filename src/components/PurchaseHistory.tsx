import Image from "next/image";
import Link from "next/link";
import React from "react";

const PurchaseHistory = () => {
  return (
    <div className="sm:w-[80%] w-[83%] md:w-[80%] lg:w-[60%]  mx-auto mt-[250px] ">
      <div className="bg-[#F0F0F0] shadow-custom container  mx-auto rounded-lg lg:rounded-3xl my-4 pt-4 overflow-hidden  ">
        <div className="flex justify-between px-4">
          <Link href={'/'}>
            <Image src={'/statics/images/back.png'} width={30} height={30} alt="" />
          </Link>
          <h1 className="lg:text-2xl text-red-main font-medium text-center text-sm md:text-xl">
            Purchase history
          </h1>
          <div></div>
        </div>
        <div className="relative mx-auto w-fit my-9 flex ">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
              className=" absolute -left-10 top-8 fill-red-main"
            >
              <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
            </svg>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="69"
                viewBox="0 0 16 69"
                fill="none"
                className=" rotate-[12px] mt-3"
              >
                <path
                  d="M11.2444 68.2192C4.03841 58.4174 0.161994 46.565 0.183461 34.3995C0.204929 22.234 4.12315 10.3954 11.3637 0.619136L15.9383 4.00722C9.42181 12.8058 5.89541 23.4606 5.8761 34.4096C5.85677 45.3585 9.34554 56.0257 15.8309 64.8472L11.2444 68.2192Z"
                  fill="#ED1C24"
                />
              </svg>
            </div>

            <div>
              <Image
                src={"/statics/images/Poe2.jpg"}
                width={100}
                height={100}
                alt="user-img"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <table className=" w-full">
          <thead>
            <tr>
              <th className=" bg-gray-300 text-xs font-normal  h-[55px] md:text-sm">
                ID
              </th>
              <th className=" bg-gray-300 text-xs font-normal  h-[55px] md:text-sm">
                Course Name
              </th>
              <th className=" bg-gray-300 text-xs font-normal  h-[55px] md:text-sm">
                Bathch Id
              </th>
              <th className=" bg-gray-300 text-xs font-normal  h-[55px] md:text-sm">
                Purchase Date
              </th>
            </tr>
          </thead>
          <tbody className="rounded-lg">
            <tr className="text-center">
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
            </tr>
            <tr>
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
              <td className="border-slate-400 border-2 h-[44px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
