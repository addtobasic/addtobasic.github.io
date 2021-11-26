import { FC } from 'react';

type Props = {
  children: string | React.ReactNode;
};

const UbuntuText: FC<Props>= ({ children }) => (
  <p className='font-ubuntu_terminal text-white'>{children}</p>
);

export default UbuntuText;
