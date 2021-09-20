import React, { FC, useState } from 'react';
import Whoami from './command/Whoami';

const handler = (commandBlock: string) => {
  const command = commandBlock;
  if (command === 'whoami') {
    return <Whoami />;
  }
};

export default handler;
