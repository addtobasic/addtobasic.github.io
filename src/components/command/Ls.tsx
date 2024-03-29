import { FC } from 'react';

type Props = {
  dirItem: string[];
};

const Ls: FC<Props> = ({ dirItem }) => (
  <p className='font-ubuntu_terminal'>
    {/* ファイルは白 */}
    {dirItem
      .filter((fileName) => fileName.includes('.'))
      .map((item) => (
        <span className='inline-block pr-4 text-white' key={item}>
          {item}
        </span>
      ))}
    {/* フォルダは青 */}
    {dirItem
      .filter((fileName) => !fileName.includes('.'))
      .map((item) => (
        <span className='inline-block pr-4 text-blue-500' key={item}>
          {item}
        </span>
      ))}
  </p>
);

export default Ls;
