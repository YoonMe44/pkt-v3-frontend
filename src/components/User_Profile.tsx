import Image from "next/image";
import Link from "next/link";
import React from "react";

const User_Profile = () => {
  const userData = {
    "Student Id": "sdid_00001",
    Name: "Poe Kyi Thar",
    Email: "Poe@gmail.com",
    Phone: "09-977514241",
    Address: "No.123, Bahan Township",
    Birthday: "12-2-20000", // Fix the date format
    NRC: "12/Yakana(N)",
    Education: "Bsc",
    "Social Acc": "Poe",
  };

  return (
    <div className="sm:w-[80%] w-[83%] md:w-[80%] lg:w-[60%] mx-auto mt-[250px]">
      <div className="bg-[#F0F0F0] shadow-custom container mx-auto rounded-lg lg:rounded-3xl my-4 pt-4 overflow-hidden">
        <div className="flex justify-between px-4">
          <Link href={"/mypage"}>
            <Image
              src={"/statics/images/back.png"}
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <h1 className="lg:text-2xl text-red-main font-medium text-center text-sm md:text-xl">
            User Profile
          </h1>
          <div></div>
        </div>
        <div className="relative mx-auto w-fit my-[70px] flex">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
              className=" absolute left-[38px] bottom-[120px] fill-red-main"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="96"
                viewBox="0 0 23 96"
                fill="none"
                className=" rotate-90 absolute -top-[53px] left-[40px]"
              >
                <path
                  d="M15.3756 95.4299C5.47021 81.5665 0.20645 64.922 0.338689 47.8821C0.470935 30.8421 5.99239 14.2814 16.1117 0.573516L22.6005 5.36701C13.4932 17.7041 8.52384 32.6087 8.40483 47.9447C8.28581 63.2807 13.0232 78.2607 21.938 90.7377L15.3756 95.4299Z"
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
        <div className="flex justify-center items-center h-full">
          <div className="w-full mx-auto pb-8">
            <table className="w-full justify-center items-center">
              <tbody>
                {Object.entries(userData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="w-[50%] font-semibold mb-2 text-red-600 pb-2 pr-4 pl-2 md:w-[50%] md:pl-[100px] md:pr-[10px] lg:pr-[10px] lg:pl-[100px] 2xl:pl-[200px] sm:pl-[100px] s:pl-[10px] s:w-[50%]">
                      {key}
                    </td>
                    <td className="w-[50%] border-l-2 border-solid border-gray-400 pl-4 pr-2 text-[15px] text-gray-500 md:w-[70%] xl:pl-[100px] lg:pr-[100px] lg:pl-[70px] md:pl-[90px] sm:pl-[50px]">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
