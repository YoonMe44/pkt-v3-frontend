import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopPage from '@/components/TopPage'
import PageTitle from '@/components/PageTitle'
import MoreBtn from '@/components/MoreBtn'
const inter = Inter({ subsets: ['latin'] })

import Instructor from '@/components/Instructor'
import CourseOutline from '@/components/CourseOutline'
import OurCapacity from '@/components/OurCapacity'
import NewsCard from '@/components/NewsCard'
export default function Home() {
  return (
    <div>
      {/* MainVisual */}
      <div className="pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <div>
          <i className="text-[48px] text-black font-medium">
            <PageTitle title="Plan your" />
            <PageTitle title="future with" />
          </i>

          <i className="text-[48px] text-red-main font-medium">
            <PageTitle title="PKT Education Center" />
          </i>
        </div>
        <div className="absolute top-0 right-0 overflow-hidden -z-10">
          <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
            {/* <Image
            src="/statics/images/batchTwo.png"
            alt="sample.jpg"
            width={1000}
            height={100}
          /> */}
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-20"
              src="/statics/images/batchTwo.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Course description */}
      <div>
        <CourseOutline />
      </div>
      {/* About Us School */}
      <h2 className="text-2xl text-red-600 font-semibold text-center mt-8">
        About Us
      </h2>

      <div className="md:flex mx-auto p-4 space-x-4 justify-center rounded-3xl mb-10">
        <div className="w-[84%] p-8 bg-white grid grid-cols-2 items-center shadow-card rounded-2xl">
          <div>
            <div>
              <Image
                src="/statics/images/batchTwo.png"
                width={411}
                height={329}
                alt="registered student"
              />
            </div>
          </div>
          <div>
            <div className="pb-10">
              <label className="md:text-lg text-red-main font-bold flex justify-center">
                Welcome to PKT Education Center
              </label>
            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
                Currently, more than 1,500 participants who attended online have
                been taught.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Capacity */}
      <div>
        <OurCapacity />
      </div>

      {/* Trainers */}
      <div><Instructor /></div>

      {/* Managing Director */}

      <div className="md:flex mx-auto p-4 space-x-4 justify-center rounded-3xl my-10">
        <div className="w-[84%] p-8 bg-white grid grid-cols-3 gap-4 items-center shadow-card rounded-2xl">
          <div>
            <div>
              <Image
                src="/statics/images/Poe2.jpg"
                width={229}
                height={300}
                alt="registered student "
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="pb-10">
              <label className="">
                <span className="md:text-lg text-red-main font-bold">
                  Poe Kyi Thar
                </span>
                <span className="pl-4 text-gray-400">Managing Director</span>
              </label>
            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after
                attending a technical college in Japan, it is run by teachers
                who have established a technology company in Myanmar. In
                addition to the courses taught in the training school, there are
                also online courses for students who want to attend online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NewsCard />
      </div>
    </div>
  );
}
