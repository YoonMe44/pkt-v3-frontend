import Head from 'next/head';
import Image from 'next/image'
import PageTitle from '@/components/PageTitle';
import Instructor from '@/components/Instructor';
const About = () => {
    return (
        <div>
            <div className='pb-20 w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both'>
                <i className='text-[48px] text-black font-semibold'>
                    <PageTitle title="Read More" />
                </i>
                <i className='text-[48px] text-red-main font-semibold'>
                    <PageTitle title="About Us" />
                </i>
            </div>
        </div>


    )
}
export default About