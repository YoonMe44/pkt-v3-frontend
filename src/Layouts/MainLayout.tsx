import { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Header />
            <main className="max-w-screen-xl flex flex-wrap justify-between mx-auto px-4 py-20">{children}</main>
            <Footer/>
        </div>
    )
}

export default MainLayout