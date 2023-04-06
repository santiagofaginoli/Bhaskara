import '../styles/globals.scss'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { useRouter } from 'next/router'

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp