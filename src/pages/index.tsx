import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopPage from '@/components/TopPage'
import PageTitle from '@/components/PageTitle'
import MoreBtn from '@/components/MoreBtn'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <PageTitle title="Home Page" />
    </div>

  )
}
