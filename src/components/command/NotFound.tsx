import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  command: string;
};

const NotFound: FC<Props> = ({ command }) => (
  <UbuntuText>bash: command not found: {command}</UbuntuText>
);

export default NotFound;
