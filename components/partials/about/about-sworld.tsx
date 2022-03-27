import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import s from './about.module.scss';
import cn from 'classnames';

const AboutSworld = () => {
  const { t } = useTranslation('common');

  return (
    <section className="sw-flex sw-w-4/5 sw-mx-auto sw-justify-center sw-text-white sw-relative sw-my-24">
      <div className="sw-absolute sw-inset-0">
        <div className="sw-w-full">
          <Image
            src="/assets/images/common/globe.png"
            width={1135}
            height={893}
            layout="responsive"
            className="sw-mix-blend-screen"
          />
        </div>
      </div>
      <div className="sw-w-full lg:sw-w-1/2">
        <p className="sw-underline sw-mb-6">About us</p>
        <h6 className="sw-whitespace-pre-line sw-text-h5 sw-font-bold sw-text-barlow">
          {t('home__about_us__define')}
        </h6>
      </div>
      <div className="sw-w-full lg:sw-w-1/2">
        <div className={cn('sw-w-3/5 sw-mx-auto', s.sEvent)}>
          <Image
            src="/assets/images/common/sworld-event.jpg"
            width={387}
            height={531}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSworld;
