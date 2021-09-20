import { FC } from 'react';

type Props = {
  command: string;
};

const NotFound: FC<Props> = ({ command }) => (
  <p className='font-ubuntu_terminal text-white'>
    bash: command not found: {command}
  </p>
);

export default NotFound;
