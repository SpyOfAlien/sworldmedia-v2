import Image from 'next/image';
import { FC } from 'react';

interface Props {
  path: string;
}

const Glow: FC<Props> = ({ path }) => {
  const basePath = '/assets/svg/glows/';
  return (
    <Image
      src={`${basePath}${path}.svg`}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
  );
};

export default Glow;
