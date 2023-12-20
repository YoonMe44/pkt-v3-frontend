import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="pkt.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
