import Image from 'next/image';
import { FC } from 'react';
import Medium from '../../ui/cards/medium/medium';
import cn from 'classnames';
import s from './whyus.module.scss';
import Heading from '../../ui/typo/heading';
import { Media, MediaContextProvider } from '../../../lib/media';
import { useTranslation } from 'next-i18next';

interface Props {
  data: any[];
  cl?: string;
}

const WhyUs: FC<Props> = ({ data, cl }) => {
  const { t } = useTranslation('common');

  return (
    <div className={cn('md:sw-grid-cols-3 md:sw-w-full sw-pt-8', s.root, cl)}>
      <div className="md:sw-col-start-2 md:sw-row-start-1 md:sw-row-end-3 sw-flex sw-justify-center sw-items-center sw-flex-col sw-mt-8">
        <div className="sw-w-full">
          <Image
            src="/assets/svg/whyus.svg"
            width={580}
            height={580}
            layout="responsive"
          />
        </div>
        <div className="sw-text-center">
          <Media lessThan="md">
            <Heading h="h5">{t('home__whyus__title')}</Heading>
          </Media>
          <Media greaterThanOrEqual="md">
            <Heading h="h4">{t('home__whyus__title')}</Heading>
          </Media>
        </div>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="sw-flex sw-justify-center sw-items-center sw-my-12 md:sw-my-0"
        >
          <Medium icon={item.icon} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
