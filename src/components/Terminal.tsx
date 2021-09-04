import React, { FC } from 'react';

const Terminal: FC = () => {
  return (
    <>
      <div className='h-screen pt-20'>
        <div className='flex justify-end bg-title-bar h-10 rounded-t-xl border-b-2 border-gray-600'>
          <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mt-2 text-sbase'>
            <span className='ml-1'>-</span>
          </span>
          <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mx-2 mt-2 text-base'>
            <span className='ml-1'>□</span>
          </span>
          <span className='inline-block h-5 w-5 bg-red-500 rounded-full mr-2 mt-2 text-base'>
            <span className='ml-1'>×</span>
          </span>
        </div>
        <div className='block bg-ubuntu-terminal opacity-90 h-5/6 shadow-2xl rounded-b-xl p-2 overflow-auto md:p-8'>
          <p>genshi@genshi0916 ~ $ </p>
          <input
            className='bg-transparent focus-within:outline-none'
            id='command-area'
            type='text'
            autoComplete='off'
          />
        </div>
      </div>
    </>
  );
};

export default Terminal;
