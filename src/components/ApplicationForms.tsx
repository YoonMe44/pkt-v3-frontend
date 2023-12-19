import Image from "next/image";
import MoreBtn from "./MoreBtn";
// types
import { ApplicationForm } from "@/types";

interface ApplicationFormsProps {
  applicationForms: ApplicationForm[]
}

const ApplicationForms = ({ applicationForms }: ApplicationFormsProps) => {
  return (
    <div className="sm:w-[80%] w-[83%] md:w-[80%] lg:w-[82%] mx-auto  ">
      <div className="bg-transparent backdrop-blur-9 shadow-custom container h-[450px] lg:h-[600px] mx-auto rounded-[30px] my-4 py-10 px-2 md:px-20 sm:px-30  lg:px-20 overflow-y-scroll scroll scroll2">
        {
          applicationForms?.map((item, index) => (
            <div key={index} className="flex flex-col lg:md:flex-row w-full min-h-5  mx-auto my-4 border shadow-lg rounded-3xl bg-[#F3F3F3]">
              <div className="w-full lg:w-[20rem] overflow-hidden relative">
                <Image
                  src={item.photo.public_path}
                  alt="news-img"
                  fill
                  className="rounded-l-3xl flex-grow-3 rounded-r-3xl lg:rounded-r-none"
                />
              </div>

              <div className="flex flex-col justify-center w-full">
                <div className="ml-8">
                  <p className=" w-full lg:md:text-xl text-xs mt-2">
                    {item.name}
                  </p>
                  <table>
                    <tbody>
                      <tr>
                        <td>Gender</td>
                        <td><span className="mx-2">-</span> {item.gender === 'male' ? 'Male' : 'Female'}</td>
                      </tr>
                      <tr>
                        <td>Birthday</td>
                        <td><span className="mx-2">-</span> {item.birthday}</td>
                      </tr>
                      <tr>
                        <td>Visa</td>
                        <td><span className="mx-2">-</span> {item.visa === 'work' ? 'Work Visa' : 'Tokutei Visa'}</td>
                      </tr>
                      <tr>
                        <td>Job Type</td>
                        <td><span className="mx-2">-</span>
                          {item.job === 'be' && 'Be'}
                          {item.job === 'translator' && 'Translator'}
                          {item.job === 'hotel' && 'Hotel'}
                          {item.job === 'restaurant' && 'Restaurant'}
                          {item.job === 'food' && 'Food'}
                          {item.job === 'agriculture' && 'Agriculture'}
                          {item.job === 'elderly_care' && 'Elderly Care'}
                          {item.job === 'construction' && 'Construction'}
                          {item.job === 'building_cleaning' && 'Building Cleaning'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                  
                </div>
                <div className="w-full flex justify-end pb-2 -mt-8">
                  <div className="w-contain py-2">
                    <MoreBtn link={`/applications/${item.id}`}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }



      </div>
    </div>
  );
};

export default ApplicationForms;
