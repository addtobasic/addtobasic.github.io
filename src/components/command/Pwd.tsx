import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  currentDir: string;
};

const Pwd: FC<Props> = ({ currentDir }) => (
  <UbuntuText>{currentDir}</UbuntuText>
);

export default Pwd;
