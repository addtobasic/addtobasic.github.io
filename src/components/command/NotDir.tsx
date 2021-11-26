import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  fileName: string;
};

const NotDir: FC<Props> = ({ fileName }) => (
  <UbuntuText>bash: cd: {fileName}: not a directory</UbuntuText>
);

export default NotDir;
