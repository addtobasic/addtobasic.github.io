import { FC } from 'react';

type Props = {
  fileName: string;
};

const NotDir: FC<Props> = ({ fileName }) => (
  <p className='font-ubuntu_terminal text-white'>
    bash: cd: {fileName}: not a directory
  </p>
);

export default NotDir;
