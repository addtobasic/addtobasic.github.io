import { FC } from 'react';

type Props = {
  currentDir: string;
};

const Pwd: FC<Props> = ({ currentDir }) => (
  <p className='font-ubuntu_terminal text-white'>{currentDir}</p>
);

export default Pwd;
