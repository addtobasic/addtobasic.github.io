import React, { FC, useState } from 'react';
import Command from './Command';

const TERMINAL_MENU_INDEX = [
  'File',
  'Edit',
  'View',
  'Search',
  'Terminal',
  'Help',
];

const Terminal: FC = () => {
  const [command, setCommand] = useState('');
  const [replies, setReplies] = useState([]);
  const [logs, setLogs] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // const res = Command(command);
      // setReplies([...replies, res]);
      setLogs([...logs, { command: command }]);
      setCommand('');
    }
  };

  return (
    <div className='h-screen pt-20'>
      <div className='flex justify-end bg-title-bar h-10 rounded-t-xl  border-gray-600'>
        <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mt-2 text-sm'>
          {/* <span className=' text-grey-500 ml-0.5 mt-1'>ー</span> */}
        </span>
        <span className='inline-block h-5 w-5 bg-title-bar-button rounded-full  mx-2 mt-2 text-sm'>
          {/* <span className=' text-grey-500 ml-1'>□</span> */}
        </span>
        <span className='inline-block h-5 w-5 bg-red-500 rounded-full mr-2 mt-2 text-base'>
          {/* <span className='text-grey-500 ml-1'>×</span> */}
        </span>
      </div>
      <div className='bg-ubuntu-terminal opacity-90 pb-2'>
        <div className='flex bg-menu-bar h-6 border-gray-700 font-ubuntu_menu'>
          {TERMINAL_MENU_INDEX.map((index) => {
            return (
              <span
                className='text-base tracking-tight text-gray-200	ml-2.5'
                key={index}
              >
                {index}
              </span>
            );
          })}
        </div>
      </div>
      <div className='bg-ubuntu-terminal opacity-90 h-3/6 shadow-2xl rounded-b-xl pl-3 overflow-auto text-xl'>
        {logs.map((log: { command: string }, idx: number) => (
          <div key={idx}>
            <span className='tracking-tight font-ubuntu_terminal'>
              <span className='text-ubuntu-terminal-text'>
                genshi@genshi0916
              </span>
              <span className='text-white'>:</span>
              <span className='text-blue-300'>~</span>
              <span className='text-white'> $ </span>
            </span>
            <span className='font-ubuntu_terminal text-white'>
              {log.command}
            </span>
          </div>
        ))}
        <span className='tracking-tight font-ubuntu_terminal'>
          <span className='text-ubuntu-terminal-text'>genshi@genshi0916</span>
          <span className='text-white'>:</span>
          <span className='text-blue-300'>~</span>
          <span className='text-white'> $ </span>
        </span>

        <input
          className='bg-transparent focus-within:outline-none w-1/2 font-ubuntu_terminal text-white'
          id='command-area'
          type='text'
          autoComplete='off'
          value={command}
          onChange={handleChange}
          onKeyPress={handleOnEnter}
        />
      </div>
    </div>
  );
};

export default Terminal;
