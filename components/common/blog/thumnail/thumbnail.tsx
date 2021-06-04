import Image from 'next/image';
import { FC } from 'react';

interface Props {
  img: any;
  cl?: string;
}

const Thumbnail: FC<Props> = ({ img, cl }) => {
  return (
    <Image
      src={img}
      layout="responsive"
      width={1440}
      height={500}
      className={cl}
    />
  );
};

export default Thumbnail;
