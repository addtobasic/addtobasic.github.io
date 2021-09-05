import React, { FC } from 'react';

const Terminal: FC = () => {
  return (
    <div className='h-screen pt-20'>
      <div className='flex justify-end bg-title-bar h-10 rounded-t-xl  border-gray-600'>
        <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mt-2 text-sm'>
          <span className=' text-grey-500 ml-0.5 mt-1'>ー</span>
        </span>
        <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mx-2 mt-2 text-sm'>
          <span className=' text-grey-500 ml-1'>□</span>
        </span>
        <span className='inline-block h-5 w-5 bg-red-500 rounded-full mr-2 mt-2 text-base'>
          <span className='text-grey-500 ml-1'>×</span>
        </span>
      </div>
      <div className='flex bg-menu-bar h-6 border-gray-700 font-ubuntu_menu'>
        <span className='text-base tracking-tight text-gray-200	ml-2.5'>File</span>
        <span className='text-base tracking-tight text-gray-200 ml-2.5'>Edit</span>
        <span className='text-base tracking-tight text-gray-200 ml-2.5'>View</span>
        <span className='text-base tracking-tight text-gray-200 ml-2.5'>Search</span>
        <span className='text-base tracking-tight text-gray-200 ml-2.5'>Terminal</span>
        <span className='text-base tracking-tight text-gray-200 ml-2.5'>Help</span>
      </div>
      <div className='block bg-ubuntu-terminal opacity-90 h-3/6 shadow-2xl rounded-b-xl pt-2 pl-3 overflow-auto'>
        <p className='tracking-tight text-ubuntu-terminal-text font-ubuntu_terminal'>genshi@genshi0916:~$</p>
        <input
          className='bg-transparent focus-within:outline-none'
          id='command-area'
          type='text'
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default Terminal;
