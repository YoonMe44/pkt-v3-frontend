import Head from 'next/head';
import Image from 'next/image'
import PageTitle from '../../components/PageTitle';
import Instructor from '@/components/Instructor';
const About = () => {
    return (
        <div>
            <div>
                <i className='text-[48px] text-black font-semibold'>
                    <PageTitle title="Read More" />
                </i>
                <i className='text-[48px] text-red-main font-semibold'>
                    <PageTitle title="About Us" />
                </i>
                <div>
                    <Image
                        src="/statics/images/uk.png"
                        alt="main-logo.svg"
                        width={20}
                        height={0}
                    />
                </div>
            </div>
            <Instructor/>
        </div>


    )
}
export default About