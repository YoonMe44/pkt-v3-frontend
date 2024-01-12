import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { SidebarContext } from './MainLayout';

const AuthLayout = ({ children }: PropsWithChildren) => {
    const { user } = useAuth({ middleware: 'guest' });
    let { setUser, resetInitialState} = useContext(SidebarContext);
    useEffect(() => {
        if(!user){
         resetInitialState();
        }
        setUser(user);
    }, [user,setUser,resetInitialState]);
    
    return (
        <div>
            <Head>
                <title>PKT Education Center</title>
            </Head>
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
