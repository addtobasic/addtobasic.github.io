import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  command: string;
};

const NotFound: FC<Props> = ({ command }) => (
  // コマンド全文からコマンド部分だけを取り出す
  <UbuntuText>
    bash: command not found: {command.substring(0, command.indexOf(' ') + 1)}
  </UbuntuText>
);

export default NotFound;
