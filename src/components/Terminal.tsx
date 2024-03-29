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
        // 入力された内容からdirNameを抽出
        let dirName = command.replace('cd ', '').replace(/\/$/, '');

        // pathが入力されていないときに補完しない
        if (dirName !== '') {
          // GENSHI_PATHの時, LS_GENSHI_ITEMから'.'を含まず前方一致のものを補完
          if (currentDir === GENSHI_PATH) {
            cdCompletion(dirName, LS_GENSHI_ITEM);
          }

          // HOME_PATHの時, LS_HOME_ITEMから'.'を含まず前方一致のものを補完
          else if (currentDir === HOME_PATH) {
            cdCompletion(dirName, LS_HOME_ITEM);
          }
        }
      }

      // cat補完
      else if (command.startsWith('cat')) {
        // 入力された内容からfileNameを抽出
        let fileName = command.replace('cat ', '').replace(/\/$/, '');

        // pathが入力されていないときに補完しない
        if (fileName !== '') {
          // GENSHI_PATHの時, LS_GENSHI_ITEMから'.'を含んで前方一致のものを補完
          if (currentDir === GENSHI_PATH) {
            catCompletion(fileName, LS_GENSHI_ITEM);
          }

          // PRODUCT_PATHの時, LS_PRODUCTS_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === PRODUCTS_PATH) {
            catCompletion(fileName, LS_PRODUCTS_ITEM);
          }

          // CONTACTS_PATHの時, LS_CONTACTS_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === CONTACTS_PATH) {
            catCompletion(fileName, LS_CONTACTS_ITEM);
          }

          // WHITE_PATHの時, LS_WHITE_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === WHITE_PATH) {
            catCompletion(fileName, LS_WHITE_ITEM);
          }

          // SLIDE_PATHの時, LS_SLIDE_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === SLIDE_PATH) {
            catCompletion(fileName, LS_SLIDE_ITEM);
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
        slideCompletion(slideFile, LS_SLIDE_ITEM);
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

  const cdCompletion = (path: string, lsItems: string[]): void => {
    // lsItemsのフォルダから前方一致のものを抽出
    let completion_detail = lsItems
      .filter((item) => !item.includes('.'))
      .find((item) => !item.indexOf(path));

    if (completion_detail !== undefined) {
      setCommand('cd ' + completion_detail + '/');
    }
  };

  const catCompletion = (file: string, catItems: string[]): void => {
    // catItemsのファイルから前方一致のものを抽出
    let completion_detail = catItems
      .filter((item) => item.includes('.'))
      .find((item) => !item.indexOf(file));

    if (completion_detail !== undefined) {
      setCommand('cat ' + completion_detail);
    }
  };

  const slideCompletion = (file: string, slideItems: string[]): void => {
    // slideItemsのファイルから前方一致のものを抽出
    let completion_detail = slideItems
      .filter((item) => item.includes('.'))
      .find((item) => !item.indexOf(file));

    if (completion_detail !== undefined) {
      setCommand('slide ' + completion_detail);
    }
  };

  return (
    <div className='h-screen pt-20'>
      <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex h-10 justify-end rounded-t-xl border-gray-600 bg-title-bar'>
          <span className='mt-2 inline-block h-5 w-5 rounded-full  bg-title-bar-button text-sm'>
            {/* <span className=' text-grey-500 ml-0.5 mt-1'>ー</span> */}
          </span>
          <span className='mx-2 mt-2 inline-block h-5 w-5  rounded-full bg-title-bar-button text-sm'>
            {/* <span className=' text-grey-500 ml-1'>□</span> */}
          </span>
          <span className='mr-2 mt-2 inline-block h-5 w-5 rounded-full bg-red-500 text-base'>
            {/* <span className='text-grey-500 ml-1'>×</span> */}
          </span>
        </div>
        <div className='bg-ubuntu-terminal pb-2 opacity-90'>
          <div className='flex h-6 border-gray-700 bg-menu-bar font-ubuntu_menu'>
            {TERMINAL_MENU_INDEX.map((index) => {
              return (
                <span
                  className='ml-2.5 text-base tracking-tight	text-gray-200'
                  key={index}
                >
                  {index}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className='h-1/2 overflow-auto rounded-b-xl bg-ubuntu-terminal pl-3 text-xl opacity-90 shadow-2xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        {logs.map((log: { command: string; dir: string }, idx: number) => (
          <div key={idx}>
            <span className='font-ubuntu_terminal tracking-tight'>
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
        <span className='font-ubuntu_terminal tracking-tight'>
          <span className='text-ubuntu-terminal-text'>genshi@addtobasic</span>
          <span className='text-white'>:</span>
          <span className='text-blue-500'>~</span>
          <Directory dir={currentDir} />
          <span className='text-white'> $ </span>
        </span>
        <input
          className='w-1/2 bg-transparent font-ubuntu_terminal text-white focus-within:outline-none'
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
