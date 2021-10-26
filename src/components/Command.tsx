import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import NoFileOrDir from './command/NoFileOrDir';
import NotDir from './command/NotDir';
import Ls from './command/Ls';
import Cat from './command/Cat';
import Pwd from './command/Pwd';
import {GENSHI_PATH, PRODUCTS_PATH, CONTACTS_PATH} from '../util';


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
      dirItem = ['profile.txt', 'products', 'contacts'];
    } else if (currentDir === '/home') {
      dirItem = ['genshi'];
    } else if (currentDir === PRODUCTS_PATH) {
      dirItem = [
        'portfolio.txt',
        'cui-portfolio.txt',
        'deadline-timer.txt',
        'download-pixiv-images.txt',
      ];
    } else if (currentDir === CONTACTS_PATH) {
      dirItem = [
        'twitter.txt',
        'github.txt',
        'facebook.txt',
        'instagram.txt',
        'qiita.txt',
        'gmail.txt',
      ];
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
    } else if (currentDir === '/home' && path === 'genshi') {
      setCurrentDir(GENSHI_PATH);
    } else if (path === '..' || path === '../') {
      if (currentDir === GENSHI_PATH) {
        setCurrentDir('/home');
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
