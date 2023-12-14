import Image from "next/image";
import MoreBtn from "./MoreBtn";
// types
import { News } from "@/types";

interface NewsCardProps {
  news: News[]
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="sm:w-[80%] w-[83%] md:w-[80%] lg:w-[82%] mx-auto  ">
      <div className="bg-transparent backdrop-blur-9 shadow-custom container h-[450px] lg:h-[600px] mx-auto rounded-[30px] my-4 py-10 px-2 md:px-20 sm:px-30  lg:px-20 overflow-y-scroll scroll scroll2">
        {
          news?.map((item, index) => (
            <div key={index} className="flex flex-col lg:md:flex-row w-full min-h-5  mx-auto my-4 border shadow-lg rounded-3xl bg-[#F3F3F3]">
              <Image
                src={item.image.public_path}
                width={350}
                height={300}
                alt="news-img"
                className="rounded-l-3xl flex-grow-3 hidden lg:block"
              />
              <Image
                src={item.image.public_path}
                width={1000}
                height={10}
                alt="news-img"
                className="rounded-t-xl flex-grow-3  lg:hidden block mb-4"
              />

              <div className="flex flex-col justify-center">
                <p className="lg:p-8 px-4  w-full lg:md:text-sm text-xs">
                  {item.title}
                </p>
                <div className="w-full flex justify-end pb-2">
                  <div className="w-contain py-2">
                    <MoreBtn id={item.id}/>
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

export default NewsCard;
