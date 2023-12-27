import { SidebarContext } from '@/Layouts/MainLayout';
import PageTitle from '@/components/PageTitle'
import RedButton from '@/components/RedButton';
import { language } from '@/lang/lang';
import axios from '@/lib/axios';
import { ApplicationForm } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useContext } from 'react'

interface ApplicationsProps {
    applicationForms: ApplicationForm[]
}


function index({ applicationForms }: ApplicationsProps) {
    let { lang } = useContext(SidebarContext);
    const pageTitle = {
        title: language[lang].applications,
        content_1: "",
        content_2: "",
    };

    return (
        <div>
            <div className="pb-8 -mt-24">
                <PageTitle pageTitle={pageTitle} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-11/12 gap-5 xl:gap-10 mx-auto container'>
                {
                    applicationForms.map((applicationForm, index) => (
                        <div className=" max-w-[18rem]" key={index}>
                            <div className="w-full relative bg-custom-white-4 rounded-[30px] pb-[20px] shadow-card overflow-hidden">
                                <div className="absolute right-0 top-0 h-16 w-16">
                                    <div
                                        className={`${applicationForm.status === '1' ? "bg-red-600 text-white" : "bg-white text-red-600"} text-center shadow-md absolute transform rotate-45  font-semibold py-1 right-[-35px] top-[32px] w-[170px] z-50`}>
                                        {
                                            applicationForm.status === '1' ? 'Available' : 'Unavailable'
                                        }
                                        
                                    </div>
                                </div>
                               <div className="h-56 relative">
                                    <Image
                                        fill
                                        className="rounded-[30px]"
                                        src={applicationForm.photo.public_path}
                                        alt=""
                                    />
                               </div>
                                <p className="text-center text-red-main mt-[8px] font-sans font-medium text-[20px]">
                                    {applicationForm.name}
                                </p>
                                <p className="text-center m-[10px]">
                                    {applicationForm.job === 'be' && 'Be'}
                                    {applicationForm.job === 'translator' && 'Translator'}
                                    {applicationForm.job === 'hotel' && 'Hotel'}
                                    {applicationForm.job === 'restaurant' && 'Restaurant'}
                                    {applicationForm.job === 'food' && 'Food'}
                                    {applicationForm.job === 'agriculture' && 'Agriculture'}
                                    {applicationForm.job === 'elderly_care' && 'Elderly Care'}
                                    {applicationForm.job === 'construction' && 'Construction'}
                                    {applicationForm.job === 'building_cleaning' && 'Building Cleaning'}
                                </p>
                                <div className="flex justify-center">
                                    <RedButton title="More Detail" link={`/applications/${applicationForm.id}`} />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default index


export const getServerSideProps: GetServerSideProps<ApplicationsProps> = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    let applicationForms: ApplicationForm[] = [];

    try {
        const res = await axios.get(`${baseUrl}/api/job-apply`)
        applicationForms = res.data.data;
    } catch (e) {
        console.log(e)
    }

    return {
        props: {
            applicationForms: applicationForms
        }
    }
}
