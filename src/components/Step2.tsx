import React from "react";
import Image from "next/image";
import { Select, Option } from "@material-tailwind/react";
import PaymentCard from "./PaymentCard";
const Step2: React.FC = () => {
  return (
    <div>
      <div className="w-[60%] mix-blend-saturation mx-auto">
        <label className="block mb-2 text-[20px] font-medium text-gray-darker ">
          Payment Method
        </label>
        <div className="relative">
          <select className="appearance-none bg-custom border-custom-white-17 shadow-custom text-gray-900 text-sm block w-full p-[16px] pr-8 rounded-[20px] focus:outline-none focus:shadow-outline-custom">
            <option defaultValue>Choose Payment Method</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <PaymentCard />
        <label className="block mb-2 text-[20px] font-medium text-gray-darker  mt-3">
          Phone Number
        </label>
        <input
          type="text"
          name=""
          id=""
          className="bg-custom border-custom-white-17 shadow-custom text-gray-900 text-sm block w-full p-[16px] pr-8 rounded-[20px] focus:outline-none focus:shadow-outline-custom"
        />
        <div className="mt-4">
          <p className="text-red-main font-medium">
            fvwrfwerffewfwfgvwrfgrwe fvwrfwerffewfwfgvwrfgrwe
          </p>
          <p className="text-red-main font-medium">
            fvwrfwerffewfwfgvwrfgrwefvwrfwerffewfwfgvwrfgrwe
          </p>
          <p className="text-red-main font-medium">
            fvwrfwerffewfwfgvwrfgrwefvwrfwerffewfwfgvwrfgrwe
          </p>
          <p className="text-red-main font-medium">
            fvwrfwerffewfwfgvwrfgrwefvwrfwerffewfwfgvwrfgrwe
          </p>
        </div>
      </div>
      <hr className="w-[80%] bg-gray-dark h-[2px] mt-[50px] mx-auto" />
    </div>
  );
};

export default Step2;