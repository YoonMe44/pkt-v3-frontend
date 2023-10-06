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
export default function Home() {
  return (
    <div>
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
        <div className='w-full right-0 animate__animated animate__bounceInDown animate__duration-2000 animate__fill-both border-t-[80px] border-t-transparent
    border-l-[200px] border-l-rose-600
    border-b-[80px] border-b-transparent'>
          <Image
            src="/images/sample.jpg"
            alt="sample.jpg"
            width={500}
            height={100}
          />
        </div>
      </div>
      

    </div>

  )
}
