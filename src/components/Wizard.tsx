import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import RedButton from "./RedButton";
import Link from "next/link";

const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const getLineColor = (step: number) => {
    return step <= currentStep ? "bg-red-700" : "bg-gray-300";
  };

  return (
    <div>
      <div className="bg-custom-white-17 rounded-[30px] shadow-custom p-[5rem]">
        <div className="flex items-center justify-between mb-4 z-10 relative w-[64%] mx-auto">
          {/* Step Indicators */}
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-8 w-8 rounded-full border-8  flex items-center justify-center ${
                step <= currentStep
                  ? "bg-red-700 border-red-main text-red-main"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              <div className="mt-[87px] flex">
                {step === 1 && (
                  <div className="w-[14rem] text-center">
                    <p className="font-medium text-[22px]">Course Confirm</p>
                  </div>
                )}
                {step === 2 && (
                  <div className="w-[14rem] text-center">
                    <p className="font-medium text-[22px]">Pay Confirm</p>
                  </div>
                )}
                {step === 3 && (
                  <div className="w-[14rem]">
                    <p className="font-medium text-[22px]">
                      Enroll Step Complete
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Lines */}
        <div className="relative w-[63%] mx-auto">
          <div
            className={` absolute top-1/2 mt-[-37px] ${getLineColor(
              2
            )} w-[50%] h-[10px] left-1/6 `}
          ></div>
          <div
            className={` absolute top-1/2 mt-[-37px] ${getLineColor(
              3
            )} w-[50%] h-[10px] left-1/2 `}
          ></div>
        </div>
        {/* Render Current Step */}
        <div className="width-full  border-[10px]">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 grid grid-cols-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          {currentStep === 1 && (
            // <button
            //   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            //   onClick={handleNext}
            // >
            //   Next
            // </button>
            <div className="w-full mx-auto flex gap-3 justify-end">
              <button className="WhiteBtn">
                <span className="shadow1"></span>
                <span className="edge1"></span>
                <Link href="#" className="front1">
                  back
                </Link>
              </button>
              <RedButton title="Continue" onClick={handleNext} />
            </div>
          )}
          {currentStep === 2 && (
            // <button
            //   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            //   onClick={handleNext}
            // >
            //   Next
            // </button>
            <div className="w-full mx-auto flex gap-3 justify-end">
              <button className="WhiteBtn" onClick={handlePrev}>
                <span className="shadow1"></span>
                <span className="edge1"></span>
                <Link href="#" className="front1">
                  back
                </Link>
              </button>
              <RedButton title="Continue" onClick={handleNext} />
            </div>
          )}
          {currentStep === 3 && (
            // <button
            //   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            //   onClick={handleNext}
            // >
            //   Next
            // </button>

            <div className="w-full mx-auto flex gap-3 justify-end">
              <button className="WhiteBtn" onClick={handlePrev}>
                <span className="shadow1"></span>
                <span className="edge1"></span>
                <Link href="#" className="front1">
                  back
                </Link>
              </button>
              <RedButton title="My page" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wizard;
