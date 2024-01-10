import axios from '@/lib/axios';
import { InterviewProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

interface CartItemProps {
    interview: InterviewProps,
    fetchData: () => void
}

function CartItem({ interview, fetchData }: CartItemProps) {

    const [show, setShow] = useState(false);
    const checkAge = (birthdate: string) => {
        const birthDate: any = new Date(birthdate);
        const today: any = new Date();

        // Calculate the difference in milliseconds between the two dates
        const diffInMs = today - birthDate;

        // Convert the difference to years
        const age = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

        return age;
    }

    const changeStatus = async () => {
        const token = localStorage.getItem('token');
        console.log(token);

        try {
            const res = await axios.delete(`/api/cancel-interview/${interview.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            fetchData();
            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    const viewDetails = () => {
        if (interview.status === '0' || interview.completed === '1') {
            return false;
        }
        setShow(true);
    }
    return (
        <div className='w-full flex flex-col md:flex-row justify-between' key={interview.id}>
            <div className='flex'>
                <Link href="/applications">
                    <div className='relative w-32 h-32'>
                        <Image src={interview.applicant.photo.public_path} alt="item.png" fill sizes='34vw' />
                    </div>
                </Link>
                <div className='ml-4'>
                    <p className='text-red-600 font-semibold text-[18px]'>{interview.applicant.name}</p>
                    <p className='text-gray-600 font-semibold text-[14px] my-1'>{interview.applicant.visa}</p>
                    <p className='text-gray-600 font-semibold text-[14px] my-1'>{interview.applicant.job}</p>
                    <p className='text-gray-600 font-semibold text-[14px] my-1'>{checkAge(interview.applicant.birthday)} years old</p>
                </div>
            </div>
            <div className='ml-4 flex justify-center items-center md:flex-col md:items-end'>
                <button className='bg-red-600 p-2 px-4 mr-4 md:mr-0 text-white font-semibold rounded-md shadow-gray-500 hover:bg-red-500  flex items-center shadow-md my-2' onClick={viewDetails}>
                    {interview.completed === '1' ? 'Completed' : interview.status === '0' ? 'Pending' : 'View Details'}
                </button>

                <button className='bg-gray-400 p-2 h-fit px-4 text-white font-semibold rounded-md shadow-gray-400 hover:opacity-80  flex items-center shadow-md' onClick={changeStatus}>Cancel</button>
            </div>

            <div className={`${show ? 'flex' : 'hidden'}  fixed top-0 right-0 left-0 z-50 justify-center items-center mx-auto md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden`}>
                <div className='bg-white w-1/2 rounded-lg p-6 shadow-xl'>
                    <p className='text-[20px] text-red-600 text-center font-semibold'>Meeting Details</p>
                    <hr className='my-4' />
                    <div>
                        <p className='text-[18px] mb-4 font-semibold text-center text-red-600'>Poe Kyi Thar accepted your request.</p>
                        <p className='text-[16px] mb-4 '>Poe Kyi Thar is inviting you to a scheduled Zoom meeting.</p>

                        <p><span className='font-semibold text-red-600'>Time:</span> {
                            interview.time_zone
                        }</p>

                        <p className='mt-2 font-semibold text-red-600'>Join Zoom Meeting</p>
                        <a className='underline text-blue-700 mb-2' href={interview.invite_link}>
                            {interview.invite_link}
                        </a>
                        <p className='mt-2'><span className='font-semibold text-red-600'>Meeting ID:</span> {interview.meeting_id}</p>
                        <p><span className='font-semibold text-red-600'>Passcode:</span> {interview.pass_code}</p>
                    </div>
                    <div className='mt-8 flex justify-center w-full'>
                        <button className='bg-gray-400 p-2 px-4 text-white font-semibold rounded-md shadow-gray-400 hover:opacity-80  flex items-center shadow-md' onClick={() => setShow(false)} >Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem
