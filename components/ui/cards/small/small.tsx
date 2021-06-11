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
          ' sw-relative hover:sw-bg-modal sw-rounded-sm sw-flex sw-flex-col xl:sw-flex-row xl:sw-items-center sw-cursor-pointer sw-justify-start',
          cl,
          s.root
        )}
        onClick={onClick}
      >
        <Media lessThan="xl">
          <div className="xl:sw-mx-xsm sw-mb-8 md:sw-mb-0">
            <Image
              src={icon}
              width={70}
              height={70}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media at="xl">
          <div className="xl:sw-mx-xsm sw-mb-0">
            <Image
              src={icon}
              width={90}
              height={90}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media greaterThan="xl">
          <div className="xl:sw-mx-xsm">
            <Image
              src={icon}
              width={100}
              height={100}
              alt="Brand communication"
            />
          </div>
        </Media>

        <Media lessThan="xl">
          <Heading h="h6">{content}</Heading>
        </Media>

        <Media at="xl">
          <Heading h="h5">{content}</Heading>
        </Media>

        <Media greaterThan="xl">
          <Heading h="h5">{content}</Heading>
        </Media>

        <div className={cn('sw-mx-xsm sw-absolute', s.arrow)}>
          <Media lessThan="xl">
            <Arrow width="25px" height="25px" />
          </Media>

          <Media at="xl">
            <Arrow width="30px" height="30px" />
          </Media>

          <Media greaterThan="xl">
            <Arrow width="35px" height="35px" />
          </Media>
        </div>
      </div>
    </MediaContextProvider>
  );
};

export default SmallCard;
