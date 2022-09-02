import UbuntuText from './components/UbuntuText';
export const HOME_PATH: string = '/home';
export const GENSHI_PATH: string = '/home/genshi';
export const PRODUCTS_PATH: string = '/home/genshi/products';
export const CONTACTS_PATH: string = '/home/genshi/contacts';
export const WHITE_PATH: string = '/home/genshi/white';
export const SLIDE_PATH: string = '/home/genshi/slide';

export const LS_HOME_ITEM: string[] = ['genshi'];
export const LS_GENSHI_ITEM: string[] = [
  'profile.txt',
  'products',
  'contacts',
  'white',
  'slide',
];
export const LS_PRODUCTS_ITEM: string[] = [
  'portfolio.txt',
  'cui-portfolio.txt',
  'deadline-timer.txt',
  'download-pixiv-images.txt',
];
export const LS_CONTACTS_ITEM: string[] = [
  'twitter.txt',
  'github.txt',
  'facebook.txt',
  'instagram.txt',
  'qiita.txt',
  'gmail.txt',
];
export const LS_WHITE_ITEM: string[] = [
  'README.md',
  'main.py0',
  'pyproject.toml',
  'requirements.txt',
];
export const LS_SLIDE_ITEM: string[] = ['geeksai.pptx'];

export const CAT_FILE_CONTENTS = {
  'profile.txt': {
    content: 'Name: Genshi, Age: 19, Likes: Twitter, NovelGame',
  },
  'portfolio.txt': {
    content: 'addtobasic.dev',
    url: 'https://addtobasic.dev/',
  },
  'cui-portfolio.txt': {
    content: 'CUI Portfolio like ubuntu',
    url: 'https://github.com/addtobasic/addtobasic.github.io',
  },
  'deadline-timer.txt': {
    content: '名言が表示される邪悪なタイマー',
    url: 'https://addtobasic.github.io/deadline-timer/',
  },
  'download-pixiv-images.txt': {
    content: 'pixivのブックマークをすべてダウンロードしてくるアプリ',
    url: 'https://github.com/addtobasic/auto-download-pixiv-bookmark-images',
  },
  'twitter.txt': {
    content: 'Twitter: addtobasic',
    url: 'https://twitter.com/addtobasic',
  },
  'github.txt': {
    content: 'GitHub: addtobasic',
    url: 'https://github.com/addtobasic',
  },
  'facebook.txt': {
    content: 'facebook: Genki Kano',
    url: 'https://www.facebook.com/genki.kano.794',
  },
  'instagram.txt': {
    content: 'instagram: addtobasic',
    url: 'https://www.instagram.com/addtobasic/',
  },
  'qiita.txt': {
    content: 'Qiita: addtobasic',
    url: 'https://qiita.com/addtobasic',
  },
  'gmail.txt': {
    content: 'Gmail: addtobasic@gmail.com',
    url: 'mailto:addtobasic@gmail.com',
  },
};

export const README_FILE_CONTENT = (
  <UbuntuText>
    <p># white</p>
    <p className='pb-3'>
      [存在しない技術Advent Calendar](
      <a
        href='https://adventar.org/calendars/6774'
        target='_blank'
        rel='noreferrer'
      >
        https://adventar.org/calendars/6774
      </a>
      )の19日目のネタを存在させました.
    </p>
    <p className='pb-3'>
      存在しない技術「pyth0n」を存在しないフォーマッタ「white」でフォーマットします.
    </p>
    <p># Setup</p>
    <p>```bash</p>
    <p>$ cd white</p>
    <p>$ pip install -r requirements.txt</p>
    <p className='pb-3'>```</p>
    <p># Running the format</p>
    <p>```bash</p>
    <p>$ white [ファイル名 or フォルダ名]</p>
    <p>```</p>
  </UbuntuText>
);

export const REQUIREMENTS_FILE_CONTENT = (
  <UbuntuText>
    <p>white==21.11b1</p>
    <p>click==8.0.3</p>
    <p>mypy-extensions==0.4.3</p>
    <p>pathspec==0.9.0</p>
    <p>platformdirs==2.4.0</p>
    <p>regex==2021.11.10</p>
    <p>tomli==1.2.2</p>
    <p>typing-extensions==4.0.0</p>
  </UbuntuText>
);

export const MAIN_FILE_CONTENT = (
  <UbuntuText>
    <p>
      word_list= [&#039;H&#039;,&#039;e&#039;, &#039;l&#039;,&#039;l&#039; ,
      &#039;o&#039;, &#039; &#039;,&#039;W&#039;, &#039;o&#039;,&#039;r&#039;,
      &#039;l&#039; ,&#039;d&#039; ]
    </p>
    <p>word = &#039;&#039;</p>
    <p>for item in word_list:</p>
    <p className='pl-8'>word +=item</p>
    <p>print ( word)</p>
  </UbuntuText>
);

export const MAIN_FILE_CONTENT_SEMI = (
  <UbuntuText>
    <p>
      word_list = [&quot;H&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;,
      &quot;o&quot;, &quot; &quot;, &quot;W&quot;, &quot;o&quot;, &quot;r&quot;,
      &quot;l&quot;, &quot;d&quot;];
    </p>
    <p>word = &quot;&quot;;</p>
    <p>for item in word_list:</p>
    <p className='pl-8'>word += item;</p>
    <p>print(word);</p>
  </UbuntuText>
);

export const PYPROJECT_FILE_CONTENT = (
  <UbuntuText>
    <p>[tool.white]</p>
    <p>line-length = 90</p>
    <p>target-version = [&#039;pyt37&#039;]</p>
    <p>semi = true</p>
    <p>include = &#039;\.pyi?$&#039;</p>
    <p>exclude = &#039;&#039;&#039;</p>
    <p>(</p>
    <p className='pl-4'>/(</p>
    <p className='pl-8'>\.eggs</p>
    <p className='pl-8'> | \.git</p>
    <p className='pl-8'> | \.hg</p>
    <p className='pl-8'> | \.mypy_cache</p>
    <p className='pl-8'> | \.tox</p>
    <p className='pl-8'> | \.venv</p>
    <p className='pl-8'> | \_build</p>
    <p className='pl-8'> | buck-out</p>
    <p className='pl-8'> | build</p>
    <p className='pl-8'> | dist</p>
    <p className='pl-4'>)/</p>
    <p className='pl-4'>| foo.py</p>
    <p>)</p>
    <p>&#039;&#039;&#039;</p>
  </UbuntuText>
);

export const getDateStr = () => {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let week = '';
  switch (day) {
    case 0:
      week = '日曜日';
      break;
    case 1:
      week = '月曜日';
      break;
    case 2:
      week = '火曜日';
      break;
    case 3:
      week = '水曜日';
      break;
    case 4:
      week = '木曜日';
      break;
    case 5:
      week = '金曜日';
      break;
    case 6:
      week = '土曜日';
      break;
  }

  const dateStr =
    year +
    '年 ' +
    month +
    '月 ' +
    date +
    '日 ' +
    week +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds +
    ' JST';

  return dateStr;
};
