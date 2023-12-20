import { SidebarContext } from '@/Layouts/MainLayout';
import PageTitle from '@/components/PageTitle';
import RedButton from '@/components/RedButton';
import { language } from '@/lang/lang';
import axios from '@/lib/axios';
import { ApplicationForm } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

interface ApplicationDetailsProps {
    applicationDetails: ApplicationForm
}

const applicationDetails: NextPage<ApplicationDetailsProps> = ({ applicationDetails }: ApplicationDetailsProps) => {
    let { lang } = useContext(SidebarContext);
    let router = useRouter();

    const pageTitle = {
        title: language[lang].appDetails,
        content_1: "",
        content_2: "",
    };
    console.log(applicationDetails);

    return (
        <div>
            <div className="pb-8 -mt-24">
                <PageTitle pageTitle={pageTitle} />
            </div>
            <div className=" w-full lg:w-[30%] mx-auto  bg-transparent shadow-custom backdrop-blur-9 rounded-3xl md:p-8 p-4 pt-[20%]">
                <p className='text-2xl pb-2 text-center font-semibold text-red-600'>Profile</p>

                <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>

                    <Image fill src={applicationDetails.photo.public_path} alt="profile.png"  />
                </div>
                <div className='mt-4 justify-center flex'>
                    <div>
                        <p className='text-xl font-semibold text-red-600'>Details</p>
                        <table className='ml-4'>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td><span className='mx-2'>-</span> <span className=' text-red-600'>{applicationDetails.name}</span></td>
                                </tr>
                                <tr>
                                    <td>Birthday</td>
                                    <td><span className='mx-2'>-</span>{applicationDetails.birthday}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td><span className='mx-2'>-</span>
                                        {applicationDetails.gender === 'female' ? 'Female' : 'Male'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Visa</td>
                                    <td><span className='mx-2'>-</span>
                                        {applicationDetails.visa === 'work' ? 'Work Visa' : 'Tokutei Visa'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Job </td>
                                    <td><span className='mx-2'>-</span>
                                        {applicationDetails.job === 'be' && 'Be'}
                                        {applicationDetails.job === 'translator' && 'Translator'}
                                        {applicationDetails.job === 'hotel' && 'Hotel'}
                                        {applicationDetails.job === 'restaurant' && 'Restaurant'}
                                        {applicationDetails.job === 'food' && 'Food'}
                                        {applicationDetails.job === 'agriculture' && 'Agriculture'}
                                        {applicationDetails.job === 'elderly_care' && 'Elderly Care'}
                                        {applicationDetails.job === 'construction' && 'Construction'}
                                        {applicationDetails.job === 'building_cleaning' && 'Building Cleaning'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className='mt-8 justify-center flex'>
                    <div>
                        <p className='text-xl text-center mb-2 font-semibold text-red-600'>Introduction Video</p>
                        <div>
                            <video width="300" height="450" controls>
                                <source src={applicationDetails.intro_vd.public_path} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-center w-full'>
                    <RedButton title='Back' onClick={() => router.back()} />
                </div>
            </div>
        </div>
    )
}

export default applicationDetails;

export const getServerSideProps: GetServerSideProps<ApplicationDetailsProps> = async ({
    query,
}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    let appDetailsResponse: any;
    let id = query.id;

    try {
        const res = await axios.get(`${baseUrl}/api/job-apply/${id}`)
        appDetailsResponse = res.data.data;
    } catch (e) {
        console.log(e)
    }

    return {
        props: {
            applicationDetails: appDetailsResponse
        }
    }
}

