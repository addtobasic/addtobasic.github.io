import React, { FC } from 'react';
import Terminal from '../components/Terminal';

const Home: FC = () => {
  const anyWhereClick = () => {
    document.getElementById('command-area').focus();
  };

  return (
    <div onClick={anyWhereClick}>
      <div className='container mx-auto sm:w-5/6 md:w-4/6 :w-2/4 xl:w-5/12 text-shellGreen text-xl'>
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
