import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';
import Ls from './command/Ls';

const handler = (inputCommand: string, currentDir: string) => {
  const command = inputCommand.trim();

  if (command === '') {
    return '';
  }

  else if (command === 'whoami') {
    return <Whoami />;
  }

  else if (command === 'ls') {
    let dirItem: string[] = [];
    if(currentDir === '/home/genshi'){
      dirItem = [
        'profile.txt',
        'products',
        'contacts',
      ];
    }

    return <Ls dirItem={dirItem} />;
  }

  else {
    return <NotFound command={command} />;
  }
};

export default handler;
