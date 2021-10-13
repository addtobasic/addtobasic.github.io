import React, { FC } from 'react';
import Head from 'next/head';
import Terminal from '../components/Terminal';

const Home: FC = () => {
  const anyWhereClick = () => {
    document.getElementById('command-area').focus();
  };

  return (
    <div onClick={anyWhereClick}>
      <Head>
        <title>genshi@addtobasic: ~</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:title" content="CUI Portfolio" />
        <meta property="og:description" content="CUI Portfolio like ubuntu terminal." />
        <meta property="og:url" content="https://addtobasic.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/addtobasic/portfolio/master/assets/genshi.jpg"
        />
      </Head>
      <div className='container mx-auto sm:w-5/6 md:w-4/6 :w-2/4 xl:w-5/12 text-shellGreen text-xl'>
        <Terminal />
      </div>
    </div>
  );
};

export default Home;
