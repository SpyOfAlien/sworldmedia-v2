import Heading from '../../ui/typo/heading';
import { FC } from 'react';
import Image from 'next/image';
import { Container } from '../../layout';

interface Props {
  title: string;
  imgSrc: string;
}

const Clients: FC<Props> = ({ title, imgSrc }) => {
  return (
    <Container cl="sw-flex sw-items-center sw-flex-col sw-items-center sw-justify-center sw-h-full">
      <Heading h="h4" cl="sw-text-gradient">
        {title}
      </Heading>
      <Image src={imgSrc} width={907} height={680} />
    </Container>
  );
};

export default Clients;
