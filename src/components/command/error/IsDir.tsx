import { FC } from 'react';
import UbuntuText from '../../UbuntuText';

type Props = {
  fileName: string;
};

const IsDir: FC<Props> = ({ fileName }) => (
  <UbuntuText>bash: cat: {fileName}: Is a directory</UbuntuText>
);

export default IsDir;
