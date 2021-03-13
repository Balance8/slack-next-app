import react from 'react';
import { Pill } from './atoms/Pill';
const BlogCard = (props) => {
  return (
    <>
      <div className='flex items-center justify-center py-12 bg-gray-200 dark:bg-gray-900'>
        <div className='relative w-full max-w-md bg-white rounded shadow dark:bg-gray-800'>
          <div className='px-6 py-6'>
            <p className='text-base font-bold leading-5 text-gray-800 sm:text-xl dark:text-gray-100'>
              Lorem ipsum dolor
            </p>
            <p className='mt-6 text-xs leading-loose text-gray-500 sm:text-base dark:text-gray-400'>
              30 mins ago
            </p>
            <p className='pt-1 text-sm leading-5 text-gray-500 sm:text-lg dark:text-gray-400'>
              Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin
              ultrices lectus. Sed bibendum felis sed metus congue, vitae congue
              eros rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio
              finibus, mollis elit ac, fermentum lacus. Quisque eleifend ac nunc
              id tristique.
              <br />
              <br />
              That’s why we are calling to #DefundPolice and
              #InvestInCommunities — and in our new video, Lorem ipsum dolorr
              Managing Director Kailee Scales helps break down just how it
              works.
            </p>
          </div>
          <div className='py-6 mt-6 border-t-2 border-gray-200 dark:border-gray-800'>
            <div className='flex items-center px-6'>
              <img
                src='https://i.ibb.co/SPMdHXG/image.png'
                alt='profile'
                className='w-20 h-20 rounded-full'
              />
              <div className='pl-4'>
                <p className='text-base font-semibold leading-4 text-indigo-700 sm:text-xl'>
                  Tolu Arowoselu
                </p>
                <p className='mt-2 text-sm leading-4 text-gray-500 dark:text-gray-400'>
                  On human rights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
