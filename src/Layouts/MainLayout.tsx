import {Fredoka} from "next/font/google"
import {PropsWithChildren} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
    subsets: ['latin'],
    variable: '--font-fredoka',
    weight: ['300','400','500','600','700'],
})

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={`${fredoka.variable} font-sans`}>
            <Header />
            <main className={`max-w-[90%] justify-between mx-auto px-4 py-20 ${fredoka.variable} font-sans`}>{children}</main>
            <Footer/>
        </div>
    )
}

export default MainLayout
