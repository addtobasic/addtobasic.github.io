import { FC } from 'react';
import UbuntuText from '../../UbuntuText';

type Props = {
  command: string;
  fileOrDir: string;
};

const NoFileOrDir: FC<Props> = ({ command, fileOrDir }) => (
  <UbuntuText>
    bash: {command}: {fileOrDir}: No such file or directory
  </UbuntuText>
);

export default NoFileOrDir;
