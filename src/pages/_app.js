import { MantineProvider } from '@mantine/core';
import '@/styles/globals.css'
import '@mantine/core/styles.css';


function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
