import { FC } from 'react';
import { SLIDE_PATH } from '../../util';

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
        src='https://docs.google.com/presentation/d/e/2PACX-1vSMeBePa36_RPXoBuCWFe9svCL4nmXmkrag5VlQF78ULI0ZZ9Kefy0BN4VF_Ja9Kn1QOBy2oHeHIJzm/embed?start=false&loop=false&delayms=3000'
        frameBorder='0'
        allow='fullscreen'
      ></iframe>
    );
  }
};

export default Slide;
