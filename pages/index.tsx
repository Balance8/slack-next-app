// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import { useTheme } from 'next-themes';
import Test from 'src/components/Test';

const index = () => {
  const { user, error, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Test />
    </>
  );
};

export default index;
