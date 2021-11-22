import React, { FC, useState } from 'react';
import handler from './Command';
import Directory from './Directory';
import {
  HOME_PATH,
  GENSHI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  WHITE_PATH,
} from '../util';

const TERMINAL_MENU_INDEX = [
  'File',
  'Edit',
  'View',
  'Search',
  'Terminal',
  'Help',
];

let logsNum = 0;
let logsStateNum = 0;

const Terminal: FC = () => {
  const [command, setCommand] = useState('');
  const [replies, setReplies] = useState([]);
  const [logs, setLogs] = useState([]);
  const [currentDir, setCurrentDir] = useState(GENSHI_PATH);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const res = handler(command, currentDir, setCurrentDir);
      setReplies([...replies, res]);
      setLogs([...logs, { command: command, dir: currentDir }]);
      setCommand('');
      if (res === 'clear') {
        setReplies([]);
        setLogs([]);
        logsNum = 0;
        logsStateNum = 0;
      }
      window.setTimeout(scrollBottom, 100);

      logsNum += 1;
      logsStateNum += 1;
    }
  };

  const handleOnTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      // 次の対象のオブジェクトに移動しない
      e.preventDefault();

      // cd補完
      if (command.startsWith('cd')) {
        let path = command.replace('cd', '').replace(/\/$/, '');
        if (currentDir === GENSHI_PATH) {
          if (path[1] === 'p') {
            setCommand('cd products/');
          } else if (path[1] === 'c') {
            setCommand('cd contacts/');
          } else if (path[1] === 'w') {
            setCommand('cd white/');
          }
        } else if (currentDir === HOME_PATH) {
          if (path[1] === 'g') {
            setCommand('cd genshi/');
          }
        }
      }

      // cat補完
      else if (command.startsWith('cat')) {
        let catFile = command.replace('cat', '').replace(/\/$/, '');
        if (currentDir === GENSHI_PATH) {
          if (catFile[1] === 'p') {
            setCommand('cat profile.txt');
          }
        } else if (currentDir === PRODUCTS_PATH) {
          if (catFile[1] === 'p') {
            setCommand('cat portfolio.txt');
          } else if (catFile[1] === 'c') {
            setCommand('cat cui-portfolio.txt');
          } else if (catFile[1] === 'd' && catFile[2] === 'e') {
            setCommand('cat deadline-timer.txt');
          } else if (catFile[1] === 'd' && catFile[2] === 'o') {
            setCommand('cat download-pixiv-images.txt');
          }
        } else if (currentDir === CONTACTS_PATH) {
          if (catFile[1] === 't') {
            setCommand('cat twitter.txt');
          } else if (catFile[1] === 'g' && catFile[2] === 'i') {
            setCommand('cat github.txt');
          } else if (catFile[1] === 'g' && catFile[2] === 'm') {
            setCommand('cat gmail.txt');
          } else if (catFile[1] === 'f') {
            setCommand('cat facebook.txt');
          } else if (catFile[1] === 'i') {
            setCommand('cat instagram.txt');
          } else if (catFile[1] === 'q') {
            setCommand('cat qiita.txt');
          }
        } else if (currentDir === WHITE_PATH) {
          if (catFile[1] === 'r' && catFile[2] === 'e' && catFile[3] === 'q') {
            setCommand('cat requirements.txt');
          } else if (
            catFile[1] === 'r' &&
            catFile[2] === 'e' &&
            catFile[3] === 'a'
          ) {
            setCommand('cat README.md');
          } else if (
            catFile[1] === 'R' &&
            catFile[2] === 'e' &&
            catFile[3] === 'a'
          ) {
            setCommand('cat README.md');
          } else if (catFile[1] === 'm') {
            setCommand('cat main.pyt');
          } else if (catFile[1] === 'p') {
            setCommand('cat pyproject.toml');
          }
        }
      }
    }

    // コマンド履歴の実装
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (logs[0] !== undefined) {
        if (logsStateNum > 0) {
          logsStateNum -= 1;

          if (logs[logsStateNum] !== undefined) {
            setCommand(String(logs[logsStateNum].command));
          }
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (logs[0] !== undefined) {
        if (logsNum - logsStateNum - 1 > 0) {
          logsStateNum += 1;
          if (logs[logsStateNum] !== undefined) {
            setCommand(String(logs[logsStateNum].command));
          }
        } else {
          setCommand('');
        }
      }
    }
  };

  const scrollBottom = () => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'auto' });
  };

  return (
    <div className='h-screen pt-20'>
      <div className='flex justify-end bg-title-bar h-10 rounded-t-xl border-gray-600'>
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
        {logs.map((log: { command: string; dir: string }, idx: number) => (
          <div key={idx}>
            <span className='tracking-tight font-ubuntu_terminal'>
              <span className='text-ubuntu-terminal-text'>
                genshi@addtobasic
              </span>
              <span className='text-white'>:</span>
              <span className='text-blue-500'>~</span>
              <Directory dir={log.dir} />
              <span className='text-white'> $ </span>
            </span>
            <span className='font-ubuntu_terminal text-white'>
              {log.command}
            </span>
            {replies[idx]}
          </div>
        ))}
        <span className='tracking-tight font-ubuntu_terminal'>
          <span className='text-ubuntu-terminal-text'>genshi@addtobasic</span>
          <span className='text-white'>:</span>
          <span className='text-blue-500'>~</span>
          <Directory dir={currentDir} />
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
          onKeyDown={handleOnTab}
        />
        <div id='bottom' style={{ float: 'left' }} />
      </div>
    </div>
  );
};

export default Terminal;
