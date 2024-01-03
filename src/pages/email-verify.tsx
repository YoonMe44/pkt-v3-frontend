import React, { useContext, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import { SidebarContext } from '@/components/Layouts/MainLayout';

function emailVerify() {
    let { setUser } = useContext(SidebarContext);
    const { user, resentMail, logout } = useAuth({
        redirectIfNoAuth: '/'
    });

    const [status, setStatus] = useState<boolean>(false);
    const [errors, setErrors] = useState<any>([]);
    const [complete, setComplete] = useState(false);
    console.log(user);

    const handleSubmit = (id: any) => {
        setStatus(true);
        if (status) {
            return false;
        }
        resentMail({
            id,
            setErrors,
            setStatus,
            setComplete
        })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className={`w-full mx-auto bg-custom-white-17 backdrop-blur-9  shadow-custom rounded-[30px] md:p-8 p-4 py-12   xl:w-1/2 `}>
                <p className='text-center font-semibold text-red-600 text-[25px]'>
                    Email Verification
                </p>
                <p className='text-center text-gray-500 my-4'>
                    You're almost there!We sent an  email to <br />
                    <span className='text-red-600'>{
                        user?.email
                    }</span>
                </p>

                <p className='text-center text-gray-500 my-4'>
                    Just click on the link in that email to complete your sign up.<br />
                    If you don't see it, you may need to check your spam folder.
                </p>
                <p className='text-center text-gray-500 mt-4'>
                    Still can't find the email?
                </p>
                {complete && <p className='font-semibold text-md text-center  text-green-600'> A new verification link has been sent to the email address. </p>}
                {user && <div className='flex justify-around items-center mt-4'>
                    <Button title={status ? "Sending..." : "Resend Email"} onSubmit={() => handleSubmit(user?.id)} />
                    <button onClick={() => {
                        setUser(null);
                        logout();
                    }} className='text-gray-600 underline'>Logout</button>
                </div>}

            </div>
        </div>
    )
}

export default emailVerify
