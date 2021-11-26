import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  whiteFile: string;
  setIsFormatted: (isFormatted: boolean) => void;
};

const White: FC<Props> = ({ whiteFile, setIsFormatted }) => {
  if (whiteFile === '.' || whiteFile === 'main.py0') {
    setIsFormatted(true);

    return <UbuntuText>All done! ✨ 🍰 ✨ 1 file left unchanged.</UbuntuText>;
  } else {
    return (
      <UbuntuText>
        Error: Invalid value for &#039;SRC ...&#039;: Path &#039;{whiteFile}
        &#039; does not exist.
      </UbuntuText>
    );
  }
};

export default White;
