import { FC } from 'react';
import cn from 'classnames';
import s from './small.module.scss';
import Paragraph from '../../typo/paragraph';
import Image from 'next/image';
import Arrow from '../../../icons/arrow';
import { Media, MediaContextProvider } from '../../../../lib/media';
import Heading from '../../typo/heading';

interface Props {
  cl?: string;
  icon: any;
  content: string;
  onClick: () => void;
}

const SmallCard: FC<Props> = ({ cl, icon, content, onClick }) => {
  return (
    <MediaContextProvider>
      <div
        className={cn(
          'sw-bg-background sw-relative hover:sw-bg-modal sw-rounded-sm sw-flex sw-flex-col xl:sw-flex-row xl:sw-items-center sw-cursor-pointer sw-justify-start',
          cl,
          s.root
        )}
        onClick={onClick}
      >
        <Media lessThan="md">
          <div className="xl:sw-mx-xsm sw-mb-8">
            <Image
              src={icon}
              width={70}
              height={70}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media between={['md', 'xl']}>
          <div className="xl:sw-mx-xsm">
            <Image
              src={icon}
              width={90}
              height={90}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media greaterThanOrEqual="xl">
          <div className="xl:sw-mx-xsm">
            <Image
              src={icon}
              width={120}
              height={120}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media lessThan="md">
          <Heading h="h6">{content}</Heading>
        </Media>

        <Media greaterThanOrEqual="md">
          <Heading h="h5">{content}</Heading>
        </Media>

        <div className={cn('sw-mx-xsm sw-absolute', s.arrow)}>
          <Media lessThan="md">
            <Arrow width="30px" height="30px" />
          </Media>

          <Media greaterThanOrEqual="md">
            <Arrow />
          </Media>
        </div>
      </div>
    </MediaContextProvider>
  );
};

export default SmallCard;
