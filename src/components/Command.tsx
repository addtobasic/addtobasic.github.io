import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import NoFileOrDir from './command/NoFileOrDir';
import NotDir from './command/NotDir';
import Ls from './command/Ls';
import Cat from './command/Cat';
import Pwd from './command/Pwd';

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
    if (currentDir === '/home/genshi') {
      dirItem = ['profile.txt', 'products', 'contacts'];
    } else if (currentDir === '/home') {
      dirItem = ['genshi'];
    } else if (currentDir === '/home/genshi/products') {
      dirItem = [
        'portfolio.txt',
        'cui-portfolio.txt',
        'deadline-timer.txt',
        'download-pixiv-images.txt',
      ];
    } else if (currentDir === '/home/genshi/contacts') {
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
    setCurrentDir('/home/genshi');
  } else if (command.startsWith('cd ')) {
    // pathの抽出と/の削除
    let path = command.replace('cd ', '').replace(/\/$/, '');

    if (
      currentDir === '/home/genshi' &&
      (path === 'products' || path === 'contacts')
    ) {
      setCurrentDir('/home/genshi/' + path);
    } else if (currentDir === '/home' && path === 'genshi') {
      setCurrentDir('/home/genshi');
    } else if (path === '..' || path === '../') {
      if (currentDir === '/home/genshi') {
        setCurrentDir('/home');
      } else if (currentDir === '/home/genshi/products') {
        setCurrentDir('/home/genshi');
      } else if (currentDir === '/home/genshi/contacts') {
        setCurrentDir('/home/genshi');
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
