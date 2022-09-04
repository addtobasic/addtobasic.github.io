import { FC } from 'react';
import NoFileOrDir from './error/NoFileOrDir';
import IsDir from './error/IsDir';
import IsSlide from './error/IsSlide';
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
  fileName: string;
  currentDir: string;
  isFormatted: boolean;
};

const Cat: FC<Props> = ({ dirItem, fileName, currentDir, isFormatted }) => {
  // フォルダにcatを実行した場合にエラーを返す
  if (!fileName.includes('.')) {
    return <IsDir fileName={fileName} />;
  }

  // catでwhite関連のファイルの場合タグで囲んだファイルの中身を返す
  if (dirItem.includes(fileName) && currentDir === WHITE_PATH) {
    if (fileName === 'README.md') {
      return README_FILE_CONTENT;
    } else if (fileName === 'requirements.txt') {
      return REQUIREMENTS_FILE_CONTENT;
    } else if (fileName === 'main.py0') {
      return isFormatted ? MAIN_FILE_CONTENT_SEMI : MAIN_FILE_CONTENT;
    } else if (fileName === 'pyproject.toml') {
      return PYPROJECT_FILE_CONTENT;
    }
  }

  // catでslide関連のファイルの場合エラーを返す
  else if (dirItem.includes(fileName) && currentDir === SLIDE_PATH) {
    return <IsSlide fileName={fileName} />;
  }

  // white関連のファイルでないならdirItemに含まれるCAT_FILE_CONTENTSの値を表示
  else if (dirItem.includes(fileName)) {
    // urlがないならhover時にunderlineをつけない
    return CAT_FILE_CONTENTS[fileName].url === undefined ? (
      <UbuntuText>{CAT_FILE_CONTENTS[fileName].content}</UbuntuText>
    ) : (
      <p className='font-ubuntu_terminal text-white'>
        <a
          className='hover:underline'
          href={CAT_FILE_CONTENTS[fileName].url}
          target='_blank'
          rel='noreferrer'
        >
          {CAT_FILE_CONTENTS[fileName].content}
        </a>
      </p>
    );
  } else {
    return <NoFileOrDir command={'cat'} fileOrDir={fileName} />;
  }
};

export default Cat;
