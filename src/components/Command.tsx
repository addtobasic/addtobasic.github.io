import React from 'react';
import Whoami from './command/Whoami';
import NotFound from './command/NotFound';

const handler = (inputCommand: string) => {
  const command = inputCommand.trim();
  if (command === '') {
    return '';
  }

  else if (command === 'whoami') {
    return <Whoami />;
  }

  else {
    return <NotFound command={command} />;
  }
};

export default handler;
