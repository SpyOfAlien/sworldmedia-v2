import Image from 'next/image';
import { FC } from 'react';
import { Container } from '../../layout';
import Medium from '../../ui/cards/medium/medium';
import cn from 'classnames';
import s from './about-us.module.scss';
import Glow from '../../glows/glow';
import Heading from '../../ui/typo/heading';
import { Media, MediaContextProvider } from '../../../lib/media';
import { useTranslation } from 'next-i18next';

interface Props {
  data: any[];
  cl?: string;
}

const AboutUs: FC<Props> = ({ data, cl }) => {
  const { t } = useTranslation('common');

  return (
    <div
      className={cn(
        'sw-grid sw-grid-cols-1 md:sw-grid-cols-3 sw-w-10/12 sw-mx-auto md:sw-w-full',
        s.grid,
        cl
      )}
    >
      <div
        className={cn(
          'sw-col-start-1 sw-col-end-2 md:sw-col-start-2 sw-flex sw-flex-col sw-justify-center sw-items-center',
          s.globe
        )}
      >
        <div className="sw-p-10 sw-relative sw-w-10/12">
          <div className="sw-absolute sw-inset-0">
            <Glow path="atom-glow" />
          </div>
          <Image
            src="/assets/svg/aboutus.svg"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="sw-mt-4">
          <Media lessThan="md">
            <Heading h="h5">{t('home__aboutus__title')}</Heading>
          </Media>
          <Media greaterThanOrEqual="md">
            <Heading h="h4">{t('home__aboutus__title')}</Heading>
          </Media>
        </div>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            'sw-flex sw-justify-center md:sw-my-0',
            s[`item-${idx}`]
          )}
        >
          <div className="sw-flex sw-items-center">
            <Medium
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
