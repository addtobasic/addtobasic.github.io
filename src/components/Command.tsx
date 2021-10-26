import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import NoFileOrDir from './command/NoFileOrDir';
import NotDir from './command/NotDir';
import Ls from './command/Ls';
import Cat from './command/Cat';
import Pwd from './command/Pwd';
import {
  HOME_PATH,
  GENSHI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  LS_HOME_ITEM,
  LS_GENSHI_ITEM,
  LS_PRODUCTS_ITEM,
  LS_CONTACTS_ITEM,
} from '../util';

let dirItem: string[] = [];

const handler = (
  inputCommand: string,
  currentDir: string,
  setCurrentDir: (currentDir: string) => void
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
    }

    return <Ls dirItem={dirItem} />;
  }

  // cd
  else if (command === 'cd') {
    setCurrentDir(GENSHI_PATH);
  } else if (command.startsWith('cd ')) {
    // pathの抽出と/の削除
    let path = command.replace('cd ', '').replace(/\/$/, '');

    if (
      currentDir === GENSHI_PATH &&
      (path === 'products' || path === 'contacts')
    ) {
      setCurrentDir(GENSHI_PATH + '/' + path);
    } else if (currentDir === HOME_PATH && path === 'genshi') {
      setCurrentDir(GENSHI_PATH);
    } else if (path === '..' || path === '../') {
      if (currentDir === GENSHI_PATH) {
        setCurrentDir(HOME_PATH);
      } else if (currentDir === PRODUCTS_PATH) {
        setCurrentDir(GENSHI_PATH);
      } else if (currentDir === CONTACTS_PATH) {
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

    return <Cat dirItem={dirItem} catFile={catFile} />;
  } else if (command === 'whoami') {
    return <Whoami />;
  } else if (command === 'pwd') {
    return <Pwd currentDir={currentDir} />;
  } else {
    return <NotFound command={command} />;
  }
};

export default handler;
