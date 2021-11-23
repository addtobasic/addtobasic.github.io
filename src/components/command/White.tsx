import { FC } from 'react';

type Props = {
  whiteFile: string;
  setIsFormatted: (isFormatted: boolean) => void;
};

const White: FC<Props> = ({ whiteFile, setIsFormatted }) => {
  if (whiteFile === '.' || whiteFile === 'main.pyt') {
    setIsFormatted(true);

    return (
      <p className='font-ubuntu_terminal text-white'>
        All done! ✨ 🍰 ✨ 1 file left unchanged.
      </p>
    );
  } else {
    return (
      <p className='font-ubuntu_terminal text-white'>
        Error: Invalid value for &#039;SRC ...&#039;: Path &#039;{whiteFile}
        &#039; does not exist.
      </p>
    );
  }
};

export default White;
