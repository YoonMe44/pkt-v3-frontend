import Image from "next/image";
import MoreBtn from "./MoreBtn";m

const News = () => {
  return (
    <div className="max-w-screen-xl  flex-col justify-between mx-auto lg:flex">
      <div className="flex flex-col space-y-2">
        <h1 className="text-5xl text-black font-medium italic">Read More</h1>
        <h1 className="text-5xl text-red-500 font-medium italic">News</h1>
      </div>
      <div className="bg-[#F0F0F0]  continer lg:h-[600px] mx-auto rounded-3xl my-4 py-10 px-20 overflow-y-scroll">
        <div className="flex w-full min-h-5  mx-auto my-4 border shadow-lg rounded-3xl bg-[#F3F3F3]">
          <Image
            src="/images/news1.jpg"
            width={300}
            height={300}
            alt="news-img"
            className="rounded-l-3xl flex-grow-3 w-25 "
          />
          <div className="flex flex-col justify-center">
            <p className="p-12 w-full">
              Many young Myanmar people, including myself, go abroad to work in
              order to change their lives...
            </p>
            <MoreBtn />
          </div>
        </div>
        <div className="flex w-full min-h-5  mx-auto my-4 border shadow-lg rounded-3xl bg-[#F3F3F3]">
          <Image
            src="/images/news1.jpg"
            width={350}
            height={300}
            alt="news-img"
            className="rounded-l-3xl flex-grow-3 w-25 "
          />
          <div className="flex flex-col justify-center">
            <p className="p-12 w-full">
              Many young Myanmar people, including myself, go abroad to work in
              order to change their lives...
            </p>
            <MoreBtn />
          </div>
        </div>
        <div className="flex w-full min-h-5  mx-auto my-4 border shadow-lg rounded-3xl bg-[#F3F3F3]">
          <Image
            src="/images/news1.jpg"
            width={350}
            height={300}
            alt="news-img"
            className="rounded-l-3xl flex-grow-3 w-25 "
          />
          <div className="flex flex-col justify-center">
            <p className="p-12 w-full">
              Many young Myanmar people, including myself, go abroad to work in
              order to change their lives...
            </p>
            <MoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
