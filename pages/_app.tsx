import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

// https://www.youtube.com/watch?v=0NeuMVzmm1g  2/2/2021
// Next JS Typescript Drum Pads | Next.js Drum Machine with Typescript
