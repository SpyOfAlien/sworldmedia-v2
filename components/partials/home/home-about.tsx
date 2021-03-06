import cn from 'classnames';
import s from './home.module.scss';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useWindowSize } from '../../../lib/hook';
import { Media } from '../../../lib/media';

const About = ({ t }) => {
  return (
    <div className={cn('sw-text-center sw-text-white sw-w-10/12 sw-mx-auto')}>
      <h3 className="sw-text-h5 lg:sw-text-h3 sw-mb-6 sw-text-barlow">
        {t('home__about_us__define')}
      </h3>
      <p>{t('home__about_us__define__desc')}</p>
    </div>
  );
};

const Why = ({ t }) => {
  const reasons = [
    {
      id: 'r1',
      title: 'home__whyus__one__title',
      desc: 'home__whyus__one__desc',
    },
    {
      id: 'r2',
      title: 'home__whyus__two__title',
      desc: 'home__whyus__two__desc',
    },
    {
      id: 'r3',
      title: 'home__whyus__three__title',
      desc: 'home__whyus__three__desc',
    },
    {
      id: 'r4',
      title: 'home__whyus__four__title',
      desc: 'home__whyus__four__desc',
    },
  ];

  return (
    <div
      className={cn(
        'sw-text-white sw-flex sw-flex-col lg:sw-flex-row sw-justify-between'
      )}
    >
      {reasons.map((item) => (
        <div
          className={cn(
            'sw-w-full lg:sw-w-1/4 sw-mx-1 sw-p-3 sw-rounded-xs',
            s.whyusItem
          )}
          key={item.id}
        >
          <h3 className="sw-uppercase sw-mb-2">{t(item.title)}</h3>
          <p className="sw-text-xs sw-text-justify">{t(item.desc)}</p>
        </div>
      ))}
    </div>
  );
};

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation('common');

  const { width } = useWindowSize();

  return (
    <section className={cn('sw-mb-40 sw-relative')}>
      <Media greaterThanOrEqual="md">
        <div
          className="sw-absolute sw-w-full lg:sw-w-1/2"
          style={{
            left: 0,
            top: width > 1024 ? '-110%' : '10%',
            opacity: 0.8,
            transform: 'rotate(180deg)',
          }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={651}
            height={1213}
          />
        </div>
      </Media>
      <div
        className={cn(
          'sw-w-11/12 lg:sw-w-2/3 sw-mx-auto sw-py-8',
          s.containerBorder,
          s.aboutContainer
        )}
      >
        <div className="sw-flex sw-text-white  sw-mb-24">
          <h3
            className={cn(
              'sw-w-1/2 sw-px-2 sw-uppercase sw-text-right sw-font-bold sw-cursor-pointer',
              s.tabControl,
              activeTab === 0 && s.activeTab
            )}
            onClick={() => setActiveTab(0)}
          >
            {t('home__about_us__title')}
          </h3>
          <h3
            className={cn(
              'sw-w-1/2 sw-px-2 sw-uppercase sw-text-left sw-font-bold sw-cursor-pointer',
              s.tabControl,
              activeTab === 1 && s.activeTab
            )}
            onClick={() => setActiveTab(1)}
          >
            {t('home__whyus__title')}
          </h3>
        </div>
        <div className="sw-w-11/12 sw-mx-auto">
          {activeTab === 0 ? <About t={t} /> : <Why t={t} />}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
