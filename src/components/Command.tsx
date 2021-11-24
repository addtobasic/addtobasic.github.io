import React, { FC, useState } from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import NoFileOrDir from './command/NoFileOrDir';
import NotDir from './command/NotDir';
import Ls from './command/Ls';
import Cat from './command/Cat';
import Pwd from './command/Pwd';
import DateNow from './command/DateNow';
import White from './command/White';
import {
  HOME_PATH,
  GENSHI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  WHITE_PATH,
  LS_HOME_ITEM,
  LS_GENSHI_ITEM,
  LS_PRODUCTS_ITEM,
  LS_CONTACTS_ITEM,
  LS_WHITE_ITEM,
} from '../util';

let dirItem: string[] = LS_GENSHI_ITEM;

const getDateStr = () => {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let week = '';
  switch (day) {
    case 0:
      week = '日曜日';
      break;
    case 1:
      week = '月曜日';
      break;
    case 2:
      week = '火曜日';
      break;
    case 3:
      week = '水曜日';
      break;
    case 4:
      week = '木曜日';
      break;
    case 5:
      week = '金曜日';
      break;
    case 6:
      week = '土曜日';
      break;
  }

  const dateStr =
    year +
    '年 ' +
    month +
    '月 ' +
    date +
    '日 ' +
    week +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    ' JST';

  return dateStr;
};

const handler = (
  inputCommand: string,
  currentDir: string,
  setCurrentDir: (currentDir: string) => void,
  isFormatted: boolean,
  setIsFormatted: (isFormatted: boolean) => void
) => {
  // 入力から前後のスペースを削除
  const command = inputCommand.trim();

  if (command === '') {
    return '';
  }

  // ls
  else if (command === 'ls' || command.startsWith('ls ')) {
    if (currentDir === GENSHI_PATH) {
      dirItem = LS_GENSHI_ITEM;
    } else if (currentDir === HOME_PATH) {
      dirItem = LS_HOME_ITEM;
    } else if (currentDir === PRODUCTS_PATH) {
      dirItem = LS_PRODUCTS_ITEM;
    } else if (currentDir === CONTACTS_PATH) {
      dirItem = LS_CONTACTS_ITEM;
    } else if (currentDir === WHITE_PATH) {
      dirItem = LS_WHITE_ITEM;
    }

    return <Ls dirItem={dirItem} />;
  }

  // cd
  else if (command === 'cd') {
    setCurrentDir(GENSHI_PATH);
  } else if (command.startsWith('cd ')) {
    // pathの抽出と/の削除
    let path = command.replace('cd ', '').replace(/\/$/, '');

    if (currentDir === GENSHI_PATH && path === 'products') {
      dirItem = LS_PRODUCTS_ITEM;
      setCurrentDir(GENSHI_PATH + '/' + path);
    } else if (currentDir === GENSHI_PATH && path === 'contacts') {
      dirItem = LS_CONTACTS_ITEM;
      setCurrentDir(GENSHI_PATH + '/' + path);
    } else if (currentDir === GENSHI_PATH && path === 'white') {
      dirItem = LS_WHITE_ITEM;
      setCurrentDir(GENSHI_PATH + '/' + path);
    } else if (currentDir === HOME_PATH && path === 'genshi') {
      dirItem = LS_GENSHI_ITEM;
      setCurrentDir(GENSHI_PATH);
    } else if (path === '..' || path === '../') {
      if (currentDir === GENSHI_PATH) {
        setCurrentDir(HOME_PATH);
      } else if (currentDir === PRODUCTS_PATH) {
        setCurrentDir(GENSHI_PATH);
      } else if (currentDir === CONTACTS_PATH) {
        setCurrentDir(GENSHI_PATH);
      } else if (currentDir === WHITE_PATH) {
        setCurrentDir(GENSHI_PATH);
      }
    } else {
      return dirItem.includes(path) ? (
        <NotDir fileName={path} />
      ) : (
        <NoFileOrDir fileOrDir={path} />
      );
    }
  }

  // cat
  else if (command === 'cat') {
    // なにも実行しない
  } else if (command.startsWith('cat ')) {
    let catFile = command.replace('cat ', '').replace(/\/$/, '');

    return (
      <Cat
        dirItem={dirItem}
        catFile={catFile}
        currentDir={currentDir}
        isFormatted={isFormatted}
      />
    );
  }

  // whoami
  else if (command === 'whoami') {
    return <Whoami />;
  }

  // pwd
  else if (command === 'pwd') {
    return <Pwd currentDir={currentDir} />;
  }

  // clear
  else if (command === 'clear') {
    return 'clear';
  }

  // date
  else if (command === 'date') {
    const dateStr = getDateStr();

    return <DateNow dateStr={dateStr} />;
  }

  // white (?)
  else if (command === 'white' && currentDir === WHITE_PATH) {
    return (
      <p className='font-ubuntu_terminal text-white'>
        No Path provided. Nothing to do 😴
      </p>
    );
  } else if (command.startsWith('white ') && currentDir === WHITE_PATH) {
    let whiteFile = command.replace('white ', '').replace(/\/$/, '');

    return <White whiteFile={whiteFile} setIsFormatted={setIsFormatted} />;
  }

  // pip
  else if (command === 'pip' && currentDir === WHITE_PATH) {
    // なにも実行しない
  } else if (command.startsWith('pip ') && currentDir === WHITE_PATH) {
    let pipCommand = command.replace('pip ', '').replace(/\/$/, '');
    if (pipCommand === 'install white') {
      return (
        <p className='font-ubuntu_terminal text-white'>
          <p>Requirement already satisfied: white</p>
          <p>Requirement already satisfied: pathspec</p>
          <p>Requirement already satisfied: click</p>
          <p>Requirement already satisfied: mypy-extensions</p>
          <p>Requirement already satisfied: typing-extensions</p>
          <p>Requirement already satisfied: regex</p>
          <p>Requirement already satisfied: platformdirs</p>
          <p>Requirement already satisfied: tomli</p>
        </p>
      );
    } else if (pipCommand === 'install -r requirements.txt') {
      return (
        <p className='font-ubuntu_terminal text-white'>
          <p>Requirement already satisfied: black==21.11b1</p>
          <p>Requirement already satisfied: click==8.0.3</p>
          <p>Requirement already satisfied: mypy-extensions==0.4.3</p>
          <p>Requirement already satisfied: pathspec==0.9.0</p>
          <p>Requirement already satisfied: platformdirs==2.4.0</p>
          <p>Requirement already satisfied: regex==2021.11.10</p>
          <p>Requirement already satisfied: tomli==1.2.2</p>
          <p>Requirement already satisfied: typing-extensions==4.0.0</p>
        </p>
      );
    }
  }

  // command not found
  else {
    return <NotFound command={command} />;
  }
};

export default handler;
