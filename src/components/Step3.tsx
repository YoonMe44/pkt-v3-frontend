import React from "react";
import PaymentCard from "./PaymentCard";

const Step3: React.FC = () => {
  return (
    <div>
      <div className="lg:w-[60%] md:w-[80%] sm:w-[80%] mx-auto">
        <p className="text-gray-darker text-[20px] mb-[10px]">
          Thank you for your dedication to the new class.
        </p>
        <p className="text-red-main font-medium">
          Please fill in the course fee according to the information below.
        </p>
        <p className="text-red-main font-medium">
          The school will contact you after confirming the information you have
          filled in.
        </p>
        <PaymentCard />
      </div>
      <hr className="w-[80%] bg-gray-dark h-[2px] mt-[50px] mx-auto" />
    </div>
  );
};

export default Step3;
