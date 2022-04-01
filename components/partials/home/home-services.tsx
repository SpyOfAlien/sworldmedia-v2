import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import s from './home.module.scss';
import { Media, MediaContextProvider } from '../../../lib/media';
import { useRouter } from 'next/router';

const HomeServices = () => {
  const router = useRouter();
  const services = [
    {
      id: 'sv1',
      name: 'home__service__production__title',
      iconLink: '/assets/images/services/icons/production.png',
      desc: 'home__service__production__desc',
      link: '/services/production',
    },
    {
      id: 'sv2',
      name: 'home__service__branding__title',
      iconLink: '/assets/images/services/icons/branding.png',
      desc: 'home__service__branding__desc',
      link: '/services/branding',
    },
    {
      id: 'sv3',
      name: 'home__service__international_relations__title',
      iconLink: '/assets/images/services/icons/international-relation.png',
      desc: 'home__service__international_relations__desc',
      link: '/services/international-relation',
    },
    {
      id: 'sv4',
      name: 'home__service__brand_communication__title',
      iconLink: '/assets/images/services/icons/brand-com.png',
      desc: 'home__service__brand_communication__desc',
      link: '/services/brand-communication',
    },
    {
      id: 'sv5',
      name: 'home__service__event__title',
      iconLink: '/assets/images/services/icons/event.png',
      desc: 'home__service__event__desc',
      link: '/services/events',
    },
  ];

  const onNavigate = (link) => {
    router.push(link);
  };
  const { t } = useTranslation('common');

  return (
    <section className="sw-text-white sw-mb-40 sw-relative">
      <div className="sw-absolute sw-inset-0">
        <div>
          <Image
            src="/assets/images/others/lineOne.png"
            width={1920}
            height={1648}
            layout="responsive"
            className="sw-mix-blend-screen"
          />
        </div>
      </div>
      <h3 className="sw-text-white sw-text-barlow sw-text-h3 sw-font-bold sw-text-center">
        {t('home__service__title')}
      </h3>
      <div className="sw-flex sw-flex-col lg:sw-flex-row">
        <div className="sw-w-4/5">
          <div className="sw-w-full">
            <Image
              src="/assets/images/common/sworld-horse.png"
              width={944}
              height={944}
              layout="responsive"
              className="sw-mix-blend-screen"
            />
          </div>
        </div>
        <div className="sw-w-full sw-flex sw-items-center">
          <div
            className={cn(
              'sw-flex sw-flex-col sw-p-2 sw-mx-8 xl:sw-mx-16 sw-w-full',
              s.containerBorder
            )}
          >
            {services.map((item) => (
              <div
                className={cn(
                  'sw-w-full sw-flex sw-my-2 sw-rounded-sm sw-cursor-pointer',
                  s.serviceItem
                )}
                key={item.id}
                onClick={() => onNavigate(item.link)}
              >
                <div className="sw-w-24">
                  <Image
                    src={item.iconLink}
                    width={192}
                    height={192}
                    layout="responsive"
                  />
                </div>
                <div className="sw-w-4/5 sw-flex sw-items-center">
                  <h3 className="sw-uppercase sw-font-bold sw-text-center">
                    {t(item.name)}
                  </h3>
                  {/* <p className="sw-text-xs">{t(item.desc)}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
