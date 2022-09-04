import { FC } from 'react';
import UbuntuText from '../../UbuntuText';

type Props = {
  fileName: string;
};

const IsSlide: FC<Props> = ({ fileName }) => (
  <UbuntuText>bash: cat: {fileName}: Is a slide file</UbuntuText>
);

export default IsSlide;
