import '../styles/globals.css';

import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme='system' attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
