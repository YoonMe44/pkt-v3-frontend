import PageTitle from "@/components/PageTitle";

import NewsCard from "../../components/NewsCard";

const NewsPage = () => {
  return (
    <div>
      <div className='pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both'>
        <div>
          <i className='text-[48px] text-black font-semibold'>
            <PageTitle title="Read More" />
          </i>

          <i className='text-[48px] text-red-main font-semibold'>
            <PageTitle title="News" />
          </i>
        </div>
        <div className='absolute top-0 right-0'>
          {/* <div className='w-full right-0 animate__animated animate__bounceInDown animate__duration-2000 animate__fill-both border-t-[80px] border-t-transparent border-l-[200px] border-l-rose-600 border-b-[80px] border-b-transparent'>
          <Image
            src="/images/sample.jpg"
            alt="sample.jpg"
            width={500}
            height={100}
          />
        </div> */}
        </div>
      </div>
      <div><NewsCard /></div>
    </div>
  )

};
export default NewsPage;
