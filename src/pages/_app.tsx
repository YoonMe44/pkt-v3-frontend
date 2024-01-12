import 'tailwindcss/tailwind.css'
import '../../public/animate.css'
import "../../public/floatingCircle.css"
import "../../public/datepicker.css";
import "../../public/toast.css";
import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/Layouts/MainLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect
    return (
        <MainLayout>
            <ToastContainer />
            <Component {...pageProps} />
        </MainLayout>
    )
}
export default App