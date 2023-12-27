import { SidebarContext } from '@/Layouts/MainLayout';
import FilePreview from '@/components/FilePreview';
import PageTitle from '@/components/PageTitle';
import RedButton from '@/components/RedButton';
import { language } from '@/lang/lang';
import axios from '@/lib/axios';
import { ApplicationForm } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

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

            <div className=" w-full lg:w-[40%] mx-auto  bg-transparent shadow-custom backdrop-blur-9 rounded-3xl md:p-8 p-4 pt-[20%] relative overflow-hidden">
                <div className="absolute right-0 top-0 h-16 w-16">
                    <div
                        className={`${applicationDetails.status === '1' ? "bg-red-600 text-white" : "bg-white text-red-600"} shadow-md text-center absolute transform rotate-45  font-semibold py-1 right-[-35px] top-[32px] w-[170px] z-50`}>
                        {
                            applicationDetails.status === '1' ? 'Available' : 'Unavailable'
                        }

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>


                    <div>
                        <p className='text-2xl pb-2 text-center font-semibold text-red-600'>Profile</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.photo.public_path} title='Profile' />

                        </div>
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
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {applicationDetails.jft?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>JFT</p>
                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto '>

                            <FilePreview file={applicationDetails.jft.public_path} title="JFT Certificate" />
                        </div>
                    </div>}
                    {applicationDetails.edu?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>Education</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.edu.public_path} title='Education' />
                        </div>
                    </div>}

                    {applicationDetails.n4?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>N4 Certificate</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.n4.public_path} title='N4 Certificate' />
                        </div>
                    </div>}

                    {applicationDetails.n3?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>N3 Certificate</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.n3.public_path} title='N3 Certificate' />
                        </div>
                    </div>}
                    {applicationDetails.n2?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>N2 Certificate</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.n2.public_path} title='N2 Certificate' />
                        </div>
                    </div>}
                    {applicationDetails.n1?.public_path && <div>
                        <p className='text-xl pb-2 text-center font-semibold text-red-600'>N1 Certificate</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.n1.public_path} title='N1 Certificate' />
                        </div>
                    </div>}

                    {applicationDetails.intro_vd?.public_path && <div>
                        <p className='text-xl text-center mb-2 font-semibold text-red-600'>Introduction Video</p>

                        <div className='w-40 h-40  relative overflow-hidden flex justify-center mx-auto'>
                            <FilePreview file={applicationDetails.intro_vd.public_path} type='video' title='Introduction Video' />
                        </div>
                    </div>}
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

