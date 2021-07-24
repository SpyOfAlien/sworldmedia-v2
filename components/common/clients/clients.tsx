import Heading from '../../ui/typo/heading';
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Media, MediaContextProvider } from '../../../lib/media';

interface Props {
  title: string;
  imgSrc: string;
  cl?: string;
}

const Clients: FC<Props> = ({ title, imgSrc, cl }) => {
  return (
    <MediaContextProvider>
      <div
        className={cn(
          'sw-flex sw-items-center sw-flex-col sw-items-center sw-justify-center sw-h-full sw-mt-24 xl:sw-mt-0',
          cl
        )}
      >
        <Media lessThan="md">
          <Heading h="h5" cl="sw-text-gradient">
            {title}
          </Heading>
        </Media>
        <Media greaterThanOrEqual="md">
          <Heading h="h4" cl="sw-text-gradient">
            {title}
          </Heading>
        </Media>
        <Image
          quality="100"
          mix-blend-mode="color-dodge"
          src={imgSrc}
          width={907}
          height={680}
        />
      </div>
    </MediaContextProvider>
  );
};

export default Clients;
