import { FC } from 'react';
import NoFileOrDir from './NoFileOrDir';
import { CAT_FILE_CONTENTS, WHITE_PATH } from '../../util';

type Props = {
  dirItem: string[];
  catFile: string;
  currentDir: string;
};

const Cat: FC<Props> = ({ dirItem, catFile, currentDir }) => {
  if (dirItem.includes(catFile) && currentDir === WHITE_PATH) {
    return (
      <>
        <p>hoge1</p>
        <p>hoge2</p>
      </>
    );
  } else if (dirItem.includes(catFile)) {
    // urlがないならhover時にunderlineをつけない
    return CAT_FILE_CONTENTS[catFile].url === undefined ? (
      <p className='font-ubuntu_terminal text-white'>
        {CAT_FILE_CONTENTS[catFile].content}
      </p>
    ) : (
      <a href={CAT_FILE_CONTENTS[catFile].url} target='_blank' rel='noreferrer'>
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
