import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme='system' attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
