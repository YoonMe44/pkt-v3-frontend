import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { GetServerSideProps, NextPage } from "next";


//types
import { News } from "@/types";
import axios from "axios";

interface NewsDetailProps {
  news: News
}

const NewsDetail: NextPage<NewsDetailProps> = ({news}) => {
  const pageTitle = {
    title: "News Detail",
    content_1: "",
    content_2: "",
  };
  console.log(news);
  
  return (
    <>
      <div className="pb-[6px]  w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <div className="pb-[70px]">
          <PageTitle pageTitle={pageTitle} />
        </div>
        <div className="absolute top-0 right-0 z-[-1] overflow-hidden bounce">
          <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              // layout="responsive"
              className="transform rotate-11 pt-20"
              src="/statics/images/batchTwo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sm:max-w-[600] md:max-w-[600] lg:max-w-[1200px] max-h-[600px] lg:max-h-[500px] mx-auto  rounded-[30px] shadow-custom bg-custom-white-17 backdrop-blur-9 overflow-y-scroll scroll sm:scroll-res">
        <div className="flex justify-center">
          <h2 className="text-2xl italic font-bold text-red-main  lg:py-12 md:py-8 py-4">
            {news.title}
          </h2>
        </div>
        <div className="p-4">
          <Image
            src={`${news.image.public_path}`}
            width={400}
            height={200}
            alt="news-photo"
            className="rounded-2xl float-left mr-4 mb-4"
          />
          <p className=" text-justify ">
          {news.content}
          </p>
        </div>
      </div>
      <div className="group sm:max-w-[600] md:max-w-[600] lg:max-w-[1200px] flex justify-end my-6 mx-auto">
        <div className="h-[57px] w-[57px] hover:w-[280px] hover:ease-in-out hover:duration-1000 overflow-hidden border rounded-full shadow-card">
          <div className="lg:w-[280px] grid grid-cols-4  place-items-center my-3 lg:gap-5 w-[210px]">
            <Image
              src={"/statics/images/share.png"}
              width={25}
              height={20}
              alt="share-button"
              className=""
            />
            <Link className="contents" href={"/facebook"}>
              <Image
                src={"/statics/images/facebook.svg"}
                width={40}
                height={40}
                alt="share-button"
                className="w-[30px]"
              />
            </Link>
            <Link className="contents" href={"/instagram"}>
              <Image
                src={"/statics/images/instagram.svg"}
                width={40}
                height={40}
                alt="share-button"
                className="w-[30px]"
              />
            </Link>
            <Link className="contents" href={"/linkin"}>
              <Image
                src={"/statics/images/linkin.svg"}
                width={40}
                height={40}
                alt="share-button"
                className="w-[30px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;



export const getServerSideProps: GetServerSideProps<NewsDetailProps> = async ({
  query,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let newsResponse: any;
  let id = query.id;
  try {
    const res = await axios.get(`${baseUrl}/api/news/${id}`)
    newsResponse = res.data.data;
  } catch (e) {
    console.log(e)
  }
  return {
    props: {
      news: newsResponse
    }
  }
}
