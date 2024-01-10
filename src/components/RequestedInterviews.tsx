import CartItem from '@/components/CartItem';
import AuthLayout from '@/components/Layouts/AuthLayout';
import { SidebarContext } from '@/components/Layouts/MainLayout';
import { useClientData } from '@/hooks/clientData'
import axios from '@/lib/axios';
import { InterviewProps } from '@/types';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'


function RequestedInterviews() {
    const [interviews, setInterviews] = useState<InterviewProps[]>([]);

    let { lang, user } = useContext(SidebarContext);

    useEffect(() => {
        getInterviewInfo();

    }, [user]);

    const getInterviewInfo = async () => {
        try {
            const token = localStorage.getItem('token');

            const res = await axios.post('/api/interviews', {
                'client_id': user?.id,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            const { data } = res.data;

            console.log(data);

            setInterviews(data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                interviews && interviews.length === 0 && 
                <div className='flex flex-col items-center'>
                        <p className=' font-semibold text-[22px] text-center mb-2 mt-8 '>No Requested Interviews</p>
                        <Link href="/applications" className='text-red-600 underline text-center text-[16px] font-semibold'>View Applications</Link>
                </div>
            }
            {
                interviews && interviews.map((item, RequestedInterviews) => (
                    <CartItem fetchData={getInterviewInfo} interview={item} />
                ))
            }
        </div>
    )
}

export default RequestedInterviews
