import { store } from '@/redux/store'
import { theme } from '@/styles/constants'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ReactNotifications } from 'react-notifications-component';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Noto+Sans+Armenian:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ReactNotifications />
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        </Provider>
      </ThemeProvider>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans Armenian', 'Montserrat';
`