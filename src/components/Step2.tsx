import React from "react";
import Image from "next/image";
const Step2: React.FC = () => {
  return (
    <div>
      <div className="w-[60%] m-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <select className="bg-custom focus:outline-none bg-gray-50 shadow-custom rounded-[30px] border-none text-gray-900 text-sm  block w-full p-2.5">
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <hr className="w-[80%] bg-gray-dark h-[2px] mt-[70px] mx-auto" />
    </div>
  );
};

export default Step2;
