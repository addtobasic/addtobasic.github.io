import { FC } from 'react';

type Props = {
  command: string;
  fileOrDir: string;
};

const NoFileOrDir: FC<Props> = ({ command, fileOrDir }) => (
  <p className='font-ubuntu_terminal text-white'>
    bash: {command}: {fileOrDir}: No such file or directory
  </p>
);

export default NoFileOrDir;
