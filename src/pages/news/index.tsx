import PageTitle from "@/components/PageTitle";

import NewsCard from "../../components/ApplicationForms";
import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";

//types
import { News } from "@/types";
import axios from "axios";

interface NewsPageProps {
  news: News[]
}

const NewsPage: NextPage<NewsPageProps> = ({ news }) => {
  const pageTitle = {
    title: "News",
    content_1: "Read More",
    content_2: "",
  };
  return (
    <div>
      <div className="pb-20  w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <PageTitle pageTitle={pageTitle} />
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
      <div className="-mt-8 ">
        <NewsCard news={news}/>
      </div>
    </div>
  );
};
export default NewsPage;


export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let newsResponse: News[] = [];
  try{
    const res = await axios.get(`${baseUrl}/api/news`)
    newsResponse = res.data.data;
  }catch(e){
    console.log(e)
  }

  // Pass data to the page via props
  return {
    props: {
      news: newsResponse
    }
  }
}