import React, { FC, useState } from 'react';
import handler from './Command';
import Directory from './Directory';
import {
  HOME_PATH,
  GENSHI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  WHITE_PATH,
  SLIDE_PATH,
  LS_HOME_ITEM,
  LS_GENSHI_ITEM,
  LS_PRODUCTS_ITEM,
  LS_CONTACTS_ITEM,
  LS_WHITE_ITEM,
  LS_SLIDE_ITEM,
} from '../util';
import path from 'path';

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
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
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
        let path = command.replace('cd ', '').replace(/\/$/, '');

        // pathが入力されていないときに補完しない
        if (path !== '') {
          // GENSHI_PATHの時, LS_GENSHI_ITEMから'.'を含まず前方一致のものを返す
          if (currentDir === GENSHI_PATH) {
            cd_completion(path, LS_GENSHI_ITEM);
          }

          // HOME_PATHの時, LS_HOME_ITEMから'.'を含まず前方一致のものを返す
          else if (currentDir === HOME_PATH) {
            cd_completion(path, LS_HOME_ITEM);
          }
        }
      }

      // cat補完
      else if (command.startsWith('cat')) {
        let catFile = command.replace('cat ', '').replace(/\/$/, '');

        // pathが入力されていないときに補完しない
        if (catFile !== '') {
          // GENSHI_PATHの時, LS_GENSHI_ITEMから'.'を含んで前方一致のものを返す
          if (currentDir === GENSHI_PATH) {
            cat_completion(catFile, LS_GENSHI_ITEM);
          }

          // PRODUCT_PATHの時, LS_PRODUCTS_ITEMから'.'を含んで前方一致のものを返す
          else if (currentDir === PRODUCTS_PATH) {
            cat_completion(catFile, LS_PRODUCTS_ITEM);
          }

          // CONTACTS_PATHの時, LS_CONTACTS_ITEMから'.'を含んで前方一致のものを返す
          else if (currentDir === CONTACTS_PATH) {
            cat_completion(catFile, LS_CONTACTS_ITEM);
          }

          // WHITE_PATHの時, LS_WHITE_ITEMから'.'を含んで前方一致のものを返す
          else if (currentDir === WHITE_PATH) {
            cat_completion(catFile, LS_WHITE_ITEM);
          }

          // SLIDE_PATHの時, LS_SLIDE_ITEMから'.'を含んで前方一致のものを返す
          else if (currentDir === SLIDE_PATH) {
            cat_completion(catFile, LS_SLIDE_ITEM);
          }
        }
      }

      // white補完
      else if (command.startsWith('white')) {
        let completion_detail = command
          .replace('white ', '')
          .replace(/\/$/, '')
          .trim();
        if (currentDir === WHITE_PATH) {
          if (completion_detail[0] === 'm') {
            setCommand('white main.py0');
          }
        }
      }

      // slide補完
      else if (command.startsWith('slide')) {
        let slideFile = command.replace('slide ', '').replace(/\/$/, '');
        slide_completion(slideFile, LS_SLIDE_ITEM);
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

  const scrollBottom = (): void => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'auto' });
  };

  const cd_completion = (path: string, lsItems: string[]): void => {
    let completion_detail = lsItems
      .filter((item) => !item.includes('.'))
      .find((item) => !item.indexOf(path));

    if (completion_detail !== undefined) {
      setCommand('cd ' + completion_detail + '/');
    }
  };

  const cat_completion = (file: string, catItems: string[]): void => {
    let completion_detail = catItems
      .filter((item) => item.includes('.'))
      .find((item) => !item.indexOf(file));

    if (completion_detail !== undefined) {
      setCommand('cat ' + completion_detail);
    }
  };

  const slide_completion = (file: string, slideItems: string[]): void => {
    let completion_detail = slideItems
      .filter((item) => item.includes('.'))
      .find((item) => !item.indexOf(file));

    if (completion_detail !== undefined) {
      setCommand('slide ' + completion_detail);
    }
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
