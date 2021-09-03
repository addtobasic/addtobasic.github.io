import React, { FC, useRef } from 'react';
import Head from 'next/head';
import Terminal from '../components/Terminal';

const Home: FC = () => {

  const anyWhereClick = () => {
    document.getElementById('command-area').focus();
  };

  return (
    <div onClick={anyWhereClick}>
      <Head>
        <title>genshi@genshi0916: ~</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto text-shellGreen text-xl tracking-widest' >
        <Terminal >
        </Terminal>
      </div>
    </div>
  );
};

export default Home;
