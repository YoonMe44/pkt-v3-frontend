import { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout