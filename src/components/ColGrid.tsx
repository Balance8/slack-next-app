import React from 'react';
import BlogCard from './BlogCard';

function ColGrid() {
  return (
    <>
      <div className='container pt-6 mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className='flex-grow h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700'>
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ColGrid;
