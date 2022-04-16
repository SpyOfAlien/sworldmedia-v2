import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import s from './about.module.scss';
import cn from 'classnames';
import { useWindowSize } from '../../../lib/hook';
import { Media } from '../../../lib/media';

const AboutSworld = () => {
  const { t } = useTranslation('common');

  const { width } = useWindowSize();

  return (
    <section className="sw-relative">
      <Media greaterThanOrEqual="md">
        <div
          className="sw-absolute sw-w-full"
          style={{
            left: 0,
            bottom: width > 1024 ? '-10%' : '10%',
            opacity: 0.8,
            transform: 'rotate(180deg)',
          }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={1263}
            height={1213}
          />
        </div>
        <div
          className="sw-absolute sw-w-full"
          style={{ top: width > 1024 ? '-20%' : '10%', opacity: 0.8 }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={1263}
            height={1213}
          />
        </div>
      </Media>
      <div className="sw-flex sw-flex-col md:sw-flex-row sw-w-4/5 sw-mx-auto sw-justify-center sw-text-white sw-relative sw-my-24">
        <div className="sw-w-full lg:sw-w-1/2 sw-mb-8 md:sw-mb-0">
          <p className="sw-underline sw-mb-6">About us</p>
          <h5 className="sw-whitespace-pre-line sw-text-h5 sw-font-bold sw-text-barlow">
            {t('home__about_us__define')}
          </h5>
          <h5 className="sw-whitespace-pre-line sw-text-h5 sw-font-bold sw-text-barlow">
            {t('home__about_us__define__desc')}
          </h5>
        </div>
        <div className="sw-w-full lg:sw-w-1/2 sw-flex sw-items-center">
          <div className={cn('sw-w-full md:sw-w-3/5 sw-mx-auto', s.sEvent)}>
            <Image
              src="/assets/images/common/sworld-event.jpg"
              width={387}
              height={531}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSworld;
