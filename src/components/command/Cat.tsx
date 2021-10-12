import { FC } from 'react';
import NoFileOrDir from './NoFileOrDir';

const CAT_FILE_CONTENTS = {
  'profile.txt': {
    'content': 'Name: Genshi, Age: 19, Likes: Twitter, NovelGame',
  },
  'portfolio.txt': {
    'content': 'addtobasic.dev',
    'url': 'https://addtobasic.dev/'
  },
  'cui-portfolio.txt':{
    'content': 'CUI Portfolio like ubuntu',
    'url': 'https://github.com/addtobasic/addtobasic.github.io'
  },
  'deadline-timer.txt':{
    'content': '名言が表示される邪悪なタイマー',
    'url': 'https://addtobasic.github.io/deadline-timer/'
  },
  'download-pixiv-images.txt':{
    'content': 'pixivのブックマークをすべてダウンロードしてくるアプリ',
    'url': 'https://github.com/addtobasic/auto-download-pixiv-bookmark-images'
  },
  'twitter.txt':{
    'content': 'Twitter: addtobasic',
    'url': 'https://twitter.com/addtobasic'
  },
  'github.txt':{
    'content': 'GitHub: addtobasic',
    'url': 'https://github.com/addtobasic'
  },
  'facebook.txt':{
    'content': 'facebook: Genki Kano',
    'url': 'https://www.facebook.com/genki.kano.794'
  },
  'instagram.txt':{
    'content': 'instagram: addtobasic',
    'url': 'https://www.instagram.com/addtobasic/'
  },
  'qiita.txt': {
    'content': 'Qiita: addtobasic',
    'url': 'https://qiita.com/addtobasic'
  },
  'gmail.txt': {
    'content': 'Gmail: addtobasic@gmail.com',
    'url': 'mailto:addtobasic@gmail.com'
  },
};

type Props = {
  dirItem: string[];
  catFile: string;
};

const Cat: FC<Props> = ({ dirItem, catFile }) => {
  if (dirItem.includes(catFile)) {
    // urlがないならhover時にunderlineをつけない
    return CAT_FILE_CONTENTS[catFile].url === undefined ? (
      <a href={CAT_FILE_CONTENTS[catFile].url} target="_blank" rel="noreferrer">
        <p className='font-ubuntu_terminal text-white'>
          {CAT_FILE_CONTENTS[catFile].content}
        </p>
      </a>
    ):
    (
      <a href={CAT_FILE_CONTENTS[catFile].url} target="_blank" rel="noreferrer">
        <p className='font-ubuntu_terminal text-white hover:underline'>
          {CAT_FILE_CONTENTS[catFile].content}
        </p>
      </a>
    );
  } else {
    return <NoFileOrDir fileOrDir={catFile} />;
  }
};

export default Cat;
