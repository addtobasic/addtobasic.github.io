import { FC } from 'react';
import NoFileOrDir from './error/NoFileOrDir';
import { SLIDE_PATH, SLIDE_FILE_CONTENTS } from '../../util';

type Props = {
  dirItem: string[];
  fileName: string;
  currentDir: string;
};

const Slide: FC<Props> = ({ dirItem, fileName, currentDir }) => {
  if (dirItem.includes(fileName) && currentDir === SLIDE_PATH) {
    return (
      <iframe
        className='w-full h-[569px]'
        src={SLIDE_FILE_CONTENTS[fileName]}
        frameBorder='0'
        allow='fullscreen'
      ></iframe>
    );
  } else {
    return <NoFileOrDir command={'slide'} fileOrDir={fileName} />;
  }
};

export default Slide;
