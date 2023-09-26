import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopPage from '@/components/TopPage'
import PageTitle from '@/components/PageTitle'
import MoreBtn from '@/components/MoreBtn'
const inter = Inter({ subsets: ['latin'] })
import 'animate.css';
import Instructor from '@/components/Instructor'
import CourseOutline from '@/components/CourseOutline'
import OurCapacity from '@/components/OurCapacity'
import News from '@/components/News'
export default function Home() {
  return (
    <div>
      {/* MainVisual */}
      <div className='pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both'>
        <div>
          <i className='text-[48px] text-black font-semibold'>
            <PageTitle title="Plan your" />
            <PageTitle title="future with" />
          </i>

          <i className='text-[48px] text-red-main font-semibold'>
            <PageTitle title="PKT Education Center" />
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

      {/* Course description */}
      <div>
        <CourseOutline />
      </div>
      {/* About Us School */}
      <h2 className="text-2xl text-red-600 font-semibold text-center mt-4">About Us</h2>

      <div className='md:flex mx-auto p-4 space-x-4 justify-center rounded-3xl mb-10'>
        <div className="w-[80%] p-8 bg-white grid grid-cols-2 items-center shadow-md rounded-2xl">
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
            <div className='pb-10'>
              <label className="md:text-lg text-red-main font-bold flex justify-center">Welcome to PKT Education Center</label>
            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after attending a technical college in Japan,
                it is run by teachers who have established a technology company in Myanmar. In addition to the courses taught in the training school,
                there are also online courses for students who want to attend online. Currently,
                more than 1,500 participants who attended online have been taught.
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
      <div>
        {/* <Instructor /> */}
      </div>

      {/* Managing Director */}

      <div className='md:flex mx-auto p-4 space-x-4 justify-center rounded-3xl my-10'>
        <div className="w-[80%] p-8 bg-white grid grid-cols-3 gap-4 items-center shadow-md rounded-2xl">
          <div>
            <div>
              <Image
                src="/statics/images/Poe2.jpg"
                width={229}
                height={300}
                alt="registered student "
                className='rounded-2xl'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <div className='pb-10'>
              <label className="">
                <span className='md:text-lg text-red-main font-bold'>Poe Kyi Thar</span>
                <span className='pl-4 text-gray-400'>Managing Director</span>
              </label>

            </div>
            <div>
              <p className="text-base">
                In addition to 4 years of work experience as a programmer after attending a technical college in Japan,
                it is run by teachers who have established a technology company in Myanmar.
                In addition to the courses taught in the training school, there are also online courses for students who want to attend online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <News />
      </div>
    </div>
  )
}
