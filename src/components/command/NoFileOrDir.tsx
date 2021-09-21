import { FC } from 'react';

type Props = {
  fileOrDir: string;
};

const NoFileOrDir: FC<Props> = ({ fileOrDir }) => (
  <p className='font-ubuntu_terminal text-white'>
    bash: cd: {fileOrDir}: No such file or directory
  </p>
);

export default NoFileOrDir;
