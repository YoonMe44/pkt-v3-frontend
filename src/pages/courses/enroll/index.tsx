import PageTitle from "@/components/PageTitle"; 
import Stepper from "@/components/Stepper";
import StepperControll from "@/components/StepperControll";
const Enroll = () => {
  return (
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          <div className="container horizontal mt-5">
              <Stepper />
          </div>
          hello
          <StepperControll />
    </div>
  );
};
export default Enroll;
