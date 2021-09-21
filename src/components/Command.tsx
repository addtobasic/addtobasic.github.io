import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import Ls from './command/Ls';
import Pwd from './command/Pwd';

const handler = (inputCommand: string, currentDir: string, setCurrentDir: (currentDir: string) => void) => {
  const command = inputCommand.trim();

  if (command === '') {
    return '';
  }

  else if (command === 'whoami') {
    return <Whoami />;
  }

  else if (command === 'ls' || command.startsWith('ls ')) {
    let dirItem: string[] = [];
    if(currentDir === '/home/genshi'){
      dirItem = [
        'profile.txt',
        'products',
        'contacts',
      ];
    }

    else if(currentDir === '/home/genshi/products'){
      dirItem = [
        'portfolio.txt',
        'cui-portfolio.txt',
        'deadline-timer.txt',
        'download-pixiv-images.txt'
      ];
    }

    else if(currentDir === '/home/genshi/contacts'){
      dirItem = [
        'twitter.txt',
        'github.txt',
        'facebook.txt',
        'instagram.txt',
        'qiita.txt',
        'gmail.txt'
      ];
    }

    return <Ls dirItem={dirItem} />;
  }

  else if(command === 'cd'){
    setCurrentDir('/home/genshi');
  }

  else if(command.startsWith('cd ')){
    let path = command.replace('cd ', '');
    if(currentDir === '/home/genshi' && (path === 'products' || path === 'contacts')){
      setCurrentDir('/home/genshi/'+ path);
    }
    else {
      return <NotFound command={"hogeddd"} />;
    }
  }

  else if(command === 'pwd'){
    return <Pwd currentDir={currentDir} />;
  }

  else {
    return <NotFound command={command} />;
  }
};

export default handler;
