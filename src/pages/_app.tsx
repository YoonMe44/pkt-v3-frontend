import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/custom-scrollbar.css'
import '../styles/responsive.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
