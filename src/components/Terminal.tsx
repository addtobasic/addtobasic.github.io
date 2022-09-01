import React, { FC, useState } from 'react';
import handler from './Command';
import Directory from './Directory';
import {
  HOME_PATH,
  GENSHI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  WHITE_PATH,
  LS_HOME_ITEM,
  LS_GENSHI_ITEM,
} from '../util';

const TERMINAL_MENU_INDEX = [
  'File',
  'Edit',
  'View',
  'Search',
  'Terminal',
  'Help',
];

let historyNum = 0;
let historyStateNum = 0;

const Terminal: FC = () => {
  const [command, setCommand] = useState('');
  const [replies, setReplies] = useState([]);
  const [logs, setLogs] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState(GENSHI_PATH);
  const [isFormatted, setIsFormatted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const res = handler(
        command,
        currentDir,
        setCurrentDir,
        isFormatted,
        setIsFormatted
      );
      setReplies([...replies, res]);
      setLogs([...logs, { command: command, dir: currentDir }]);
      setCommand('');
      if (res === 'clear') {
        setReplies([]);
        setLogs([]);
      }

      // 履歴の保存
      if (command !== '') {
        setCommandHistory([...commandHistory, command]);
        historyNum += 1;
        historyStateNum = historyNum;
      }

      window.setTimeout(scrollBottom, 100);
    }
  };

  const handleOnTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      // 次の対象のオブジェクトに移動しない
      e.preventDefault();

      // cd補完
      if (command.startsWith('cd')) {
        let path = command.replace('cd', '').replace(/\/$/, '').trim();
        // pathが入力されていないときに補完しない
        if (path !== '') {
          // GENSHI_PATHの時, LS_GENSHI_ITEMから'.'を含まず前方一致のものを返す
          if (currentDir === GENSHI_PATH) {
            let completion_detail = LS_GENSHI_ITEM.filter(
              (item) => !item.includes('.')
            ).find((item) => !item.indexOf(path));
            setCommand('cd ' + completion_detail + '/');
          }
          // HOME_PATHの時, LS_HOME_ITEMから'.'を含まず前方一致のものを返す
          else if (currentDir === HOME_PATH) {
            let completion_detail = LS_HOME_ITEM.filter(
              (item) => !item.includes('.')
            ).find((item) => !item.indexOf(path));
            setCommand('cd ' + completion_detail + '/');
          }
        }
      }

      // cat補完
      else if (command.startsWith('cat')) {
        let catFile = command.replace('cat', '').replace(/\/$/, '').trim();
        if (currentDir === GENSHI_PATH) {
          if (catFile[0] === 'p') {
            setCommand('cat profile.txt');
          }
        } else if (currentDir === PRODUCTS_PATH) {
          if (catFile[0] === 'p') {
            setCommand('cat portfolio.txt');
          } else if (catFile[0] === 'c') {
            setCommand('cat cui-portfolio.txt');
          } else if (catFile[0] === 'd' && catFile[1] === 'e') {
            setCommand('cat deadline-timer.txt');
          } else if (catFile[0] === 'd' && catFile[1] === 'o') {
            setCommand('cat download-pixiv-images.txt');
          }
        } else if (currentDir === CONTACTS_PATH) {
          if (catFile[0] === 't') {
            setCommand('cat twitter.txt');
          } else if (catFile[0] === 'g' && catFile[1] === 'i') {
            setCommand('cat github.txt');
          } else if (catFile[0] === 'g' && catFile[1] === 'm') {
            setCommand('cat gmail.txt');
          } else if (catFile[0] === 'f') {
            setCommand('cat facebook.txt');
          } else if (catFile[0] === 'i') {
            setCommand('cat instagram.txt');
          } else if (catFile[0] === 'q') {
            setCommand('cat qiita.txt');
          }
        } else if (currentDir === WHITE_PATH) {
          if (catFile[0] === 'r' && catFile[1] === 'e' && catFile[2] === 'q') {
            setCommand('cat requirements.txt');
          } else if (
            catFile[0] === 'r' &&
            catFile[1] === 'e' &&
            catFile[2] === 'a'
          ) {
            setCommand('cat README.md');
          } else if (
            catFile[0] === 'R' &&
            catFile[1] === 'e' &&
            catFile[2] === 'a'
          ) {
            setCommand('cat README.md');
          } else if (
            catFile[0] === 'R' &&
            catFile[1] === 'E' &&
            catFile[2] === 'A'
          ) {
            setCommand('cat README.md');
          } else if (catFile[0] === 'm') {
            setCommand('cat main.py0');
          } else if (catFile[0] === 'p') {
            setCommand('cat pyproject.toml');
          }
        }
      }

      // white補完
      else if (command.startsWith('white')) {
        let whiteFile = command.replace('white', '').replace(/\/$/, '').trim();
        if (currentDir === WHITE_PATH) {
          if (
            whiteFile[0] === 'r' &&
            whiteFile[1] === 'e' &&
            whiteFile[2] === 'q'
          ) {
            setCommand('white requirements.txt');
          } else if (
            whiteFile[0] === 'r' &&
            whiteFile[1] === 'e' &&
            whiteFile[2] === 'a'
          ) {
            setCommand('white README.md');
          } else if (
            whiteFile[0] === 'R' &&
            whiteFile[1] === 'e' &&
            whiteFile[2] === 'a'
          ) {
            setCommand('white README.md');
          } else if (
            whiteFile[0] === 'R' &&
            whiteFile[1] === 'E' &&
            whiteFile[2] === 'A'
          ) {
            setCommand('white README.md');
          } else if (whiteFile[0] === 'm') {
            setCommand('white main.py0');
          } else if (whiteFile[0] === 'p') {
            setCommand('white pyproject.toml');
          }
        }
      }

      // pip補完
      else if (command.startsWith('pip')) {
        let pipCommand = command
          .replace('pip install -r ', '')
          .replace(/\/$/, '')
          .trim();
        if (currentDir === WHITE_PATH) {
          if (pipCommand[0] === 'r') {
            setCommand('pip install -r requirements.txt');
          }
        }
      }
    }

    // コマンド履歴の実装
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory[0] !== undefined) {
        if (historyStateNum !== 0) {
          historyStateNum -= 1;
          setCommand(String(commandHistory[historyStateNum]));
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory[0] !== undefined) {
        if (historyNum > historyStateNum) {
          historyStateNum += 1;

          if (commandHistory[historyStateNum] !== undefined) {
            setCommand(String(commandHistory[historyStateNum]));
          } else {
            setCommand('');
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
