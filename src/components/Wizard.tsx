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
                    <p className="font-medium text-[22px]"> Confirm</p>
                  </div>
                )}
                {step === 2 && (
                  <div className="w-[14rem] text-center">
                    <p className="font-medium text-[22px]">Payment</p>
                  </div>
                )}
                {step === 3 && (
                  <div className="w-[14rem]">
                    <p className="font-medium text-[22px] text-center">
                      Complete
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
        <div className="w-[75%] rounded-[30px] border-[2px] mx-auto
         mt-[80px] pt-[40px] pb-[40px]">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {/* Navigation Buttons */}
          <div className="mx-auto mt-[40px] w-[80%]">
            {currentStep === 1 && (
              <div className="w-full mx-auto flex gap-3 justify-end">
                <button className="WhiteBtn">
                  <span className="shadow1"></span>
                  <span className="edge1"></span>
                  <Link href="#" className="front1">
                    Back
                  </Link>
                </button>
                <RedButton title="Continue" onClick={handleNext} />
              </div>
            )}
            {currentStep === 2 && (
              <div className="w-full mx-auto flex gap-3 justify-end">
                <button className="WhiteBtn" onClick={handlePrev}>
                  <span className="shadow1"></span>
                  <span className="edge1"></span>
                  <Link href="#" className="front1">
                    Back
                  </Link>
                </button>
                <RedButton title="Continue" onClick={handleNext} />
              </div>
            )}
            {currentStep === 3 && (
              <div className="w-full mx-auto flex gap-3 justify-end">
                <button className="WhiteBtn" onClick={handlePrev}>
                  <span className="shadow1"></span>
                  <span className="edge1"></span>
                  <Link href="#" className="front1">
                    Back
                  </Link>
                </button>
                <RedButton title="My page" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wizard;