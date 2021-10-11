import { FC } from 'react';

type Props = {
  dir: string;
};

const Directory: FC<Props> = ({ dir }) => {
  const displayDir = dir.replace('/home/genshi', '');

  return (
    <span className='font-ubuntu_terminal text-blue-500'>{displayDir}</span>
  );
};

export default Directory;
