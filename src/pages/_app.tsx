import 'tailwindcss/tailwind.css'
import '../../public/animate.css'
import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '@/Layouts/MainLayout'
import '../../public/animate.js'
function App({ Component, pageProps }: AppProps) {
    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect

    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
export default App