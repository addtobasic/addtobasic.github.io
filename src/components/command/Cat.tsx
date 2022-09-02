import { FC } from 'react';
import NoFileOrDir from './NoFileOrDir';
import UbuntuText from '../UbuntuText';
import {
  CAT_FILE_CONTENTS,
  WHITE_PATH,
  SLIDE_PATH,
  README_FILE_CONTENT,
  REQUIREMENTS_FILE_CONTENT,
  MAIN_FILE_CONTENT,
  MAIN_FILE_CONTENT_SEMI,
  PYPROJECT_FILE_CONTENT,
} from '../../util';

type Props = {
  dirItem: string[];
  catFile: string;
  currentDir: string;
  isFormatted: boolean;
};

const Cat: FC<Props> = ({ dirItem, catFile, currentDir, isFormatted }) => {
  // catでwhite関連のファイルの場合タグで囲んだファイルの中身を返す
  if (dirItem.includes(catFile) && currentDir === WHITE_PATH) {
    if (catFile === 'README.md') {
      return README_FILE_CONTENT;
    } else if (catFile === 'requirements.txt') {
      return REQUIREMENTS_FILE_CONTENT;
    } else if (catFile === 'main.py0') {
      return isFormatted ? MAIN_FILE_CONTENT_SEMI : MAIN_FILE_CONTENT;
    } else if (catFile === 'pyproject.toml') {
      return PYPROJECT_FILE_CONTENT;
    }
  }

  // catでslide関連のファイルの場合エラーを返す
  else if (dirItem.includes(catFile) && currentDir === SLIDE_PATH) {
    return <UbuntuText>bash: cat: {catFile}: Is a slide file</UbuntuText>;
  }

  // white関連のファイルでないならdirItemに含まれるCAT_FILE_CONTENTSの値を表示
  else if (dirItem.includes(catFile)) {
    // urlがないならhover時にunderlineをつけない
    return CAT_FILE_CONTENTS[catFile].url === undefined ? (
      <UbuntuText>{CAT_FILE_CONTENTS[catFile].content}</UbuntuText>
    ) : (
      <p className='font-ubuntu_terminal text-white'>
        <a
          className='hover:underline'
          href={CAT_FILE_CONTENTS[catFile].url}
          target='_blank'
          rel='noreferrer'
        >
          {CAT_FILE_CONTENTS[catFile].content}
        </a>
      </p>
    );
  } else {
    return <NoFileOrDir command={'cat'} fileOrDir={catFile} />;
  }
};

export default Cat;
