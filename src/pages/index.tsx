import React, { FC } from 'react';
import Terminal from '../components/Terminal';

const Home: FC = () => {
  const anyWhereClick = () => {
    document.getElementById('command-area').focus();
  };

  return (
    <div onClick={anyWhereClick}>
      <div className=':w-2/4 text-shellGreen container mx-auto text-xl sm:w-5/6 md:w-4/6 xl:w-5/12'>
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
