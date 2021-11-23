export const HOME_PATH: string = '/home';
export const GENSHI_PATH: string = '/home/genshi';
export const PRODUCTS_PATH: string = '/home/genshi/products';
export const CONTACTS_PATH: string = '/home/genshi/contacts';
export const WHITE_PATH: string = '/home/genshi/white';

export const LS_HOME_ITEM: string[] = ['genshi'];
export const LS_GENSHI_ITEM: string[] = [
  'profile.txt',
  'products',
  'contacts',
  'white',
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
  'main.pyt',
  'pyproject.toml',
  'requirements.txt',
];

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
  <p className='font-ubuntu_terminal text-white'>
    <p>これはwhiteのテスト中です</p>
    <p># white</p>
    <p># Setup</p>
    <p>```bash</p>
    <p>$ pip install -r requirements.txt</p>
    <p>```</p>
  </p>
);

export const REQUIREMENTS_FILE_CONTENT = (
  <p className='font-ubuntu_terminal text-white'>
    <p>white==21.11b1</p>
    <p>click==8.0.3</p>
    <p>mypy-extensions==0.4.3</p>
    <p>pathspec==0.9.0</p>
    <p>platformdirs==2.4.0</p>
    <p>regex==2021.11.10</p>
    <p>tomli==1.2.2</p>
    <p>typing-extensions==4.0.0</p>
  </p>
);

export const MAIN_FILE_CONTENT = (
  <p className='font-ubuntu_terminal text-white'>
    <p>word = "Hello World"</p>
    <p>print(word)</p>
  </p>
);

export const MAIN_FILE_CONTENT_SEMI = (
  <p className='font-ubuntu_terminal text-white'>
    <p>word = "Hello World";</p>
    <p>print(word);</p>
  </p>
);

export const PYPROJECT_FILE_CONTENT = (
  <p className='font-ubuntu_terminal text-white'>
    <p>[tool.white]</p>
    <p>line-length = 90</p>
    <p>target-version = ['pyt37']</p>
    <p>semi = true</p>
    <p>include = '\.pyi?$'</p>
    <p>exclude = '''</p>
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
    <p>'''</p>
  </p>
);
