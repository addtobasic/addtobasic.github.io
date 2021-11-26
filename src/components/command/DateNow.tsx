import { FC } from 'react';
import UbuntuText from '../UbuntuText';

type Props = {
  dateStr: string;
};

const DateNow: FC<Props> = ({ dateStr }) => <UbuntuText>{dateStr}</UbuntuText>;

export default DateNow;
