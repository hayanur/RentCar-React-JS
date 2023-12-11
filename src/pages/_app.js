import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import '@/styles/globals.css'
import '@mantine/core/styles.css';


function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Poppins:wght@200&display=swap"
        />
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
        />
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
