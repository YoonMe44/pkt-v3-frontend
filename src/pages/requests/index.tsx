import CartItem from '@/components/CartItem';
import AuthLayout from '@/components/Layouts/AuthLayout';
import { SidebarContext } from '@/components/Layouts/MainLayout';
import { useClientData } from '@/hooks/clientData'
import axios from '@/lib/axios';
import { InterviewProps } from '@/types';
import React, { useContext, useEffect, useState } from 'react'


function index() {
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
       <AuthLayout>
            <div className="w-[35%] mx-auto  bg-transparent shadow-custom  rounded-3xl md:p-8 p-4 pt-[20%] relative overflow-hidden">
                <p className='text-red-600 font-semibold text-[22px] text-center mb-6  underline'>Requested Interviews</p>
                <div className='grid grid-cols-1 gap-4'>
                    {
                      interviews &&  interviews.map((item, index) => (
                          <CartItem fetchData={getInterviewInfo} name={item.applicant.name} age={item.applicant.birthday} visa={item.applicant.visa} id={item.id} job={item.applicant.job} profile={item.applicant.photo.public_path} status={item.status}/>
                        ))
                    }
                </div>
               
            </div>
       </AuthLayout>
    )
}

export default index
