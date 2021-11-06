import { SessionProvider } from 'next-auth/react'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <SessionProvider><Component {...pageProps} /> </SessionProvider>
}

export default MyApp
