import { FC } from 'react';

type Props = {
  dateStr: string;
};

const DateNow: FC<Props> = ({ dateStr }) => (
  <p className='font-ubuntu_terminal text-white'>{dateStr}</p>
);

export default DateNow;
