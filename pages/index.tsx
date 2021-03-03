// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import { useTheme } from 'next-themes';

const index = () => {
  const { user, error, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <nav className='z-50 w-full h-16 bg-purple dark:bg-darkgrey'>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='order-2 w-12 h-12 p-3 md:order-3'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            test
          </button>
        </nav>
        <div className='container mx-auto dark:text-blue-900'>
          Welcome {user.name}!
        </div>
        <a className='container mx-auto' href='/api/auth/logout'>
          Logout
        </a>
      </>
    );
  }

  return <a href='/api/auth/login'>Login</a>;
};

export default index;
