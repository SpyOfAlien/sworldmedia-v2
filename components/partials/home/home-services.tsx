import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import s from './home.module.scss';

const HomeServices = () => {
  const services = [
    {
      id: 'sv1',
      name: 'home__service__production__title',
      iconLink: '/assets/images/services/icons/production.png',
      desc: 'home__service__production__desc',
    },
    {
      id: 'sv2',
      name: 'home__service__branding__title',
      iconLink: '/assets/images/services/icons/branding.png',
      desc: 'home__service__branding__desc',
    },
    {
      id: 'sv3',
      name: 'home__service__international_relations__title',
      iconLink: '/assets/images/services/icons/international-relation.png',
      desc: 'home__service__international_relations__desc',
    },
    {
      id: 'sv4',
      name: 'home__service__brand_communication__title',
      iconLink: '/assets/images/services/icons/brand-com.png',
      desc: 'home__service__brand_communication__desc',
    },
    {
      id: 'sv5',
      name: 'home__service__event__title',
      iconLink: '/assets/images/services/icons/event.png',
      desc: 'home__service__event__desc',
    },
  ];

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
      <h3 className="sw-text-white sw-text-barlow sw-text-h3 sw-font-bold sw-text-center sw-mb-12">
        {t('home__service__title')}
      </h3>
      <div className="sw-flex sw-flex-col lg:sw-flex-row">
        <div className="sw-w-full lg:sw-w-2/5 2xl:sw-w-1/2">
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

        <div
          className={cn(
            'sw-flex sw-flex-wrap sw-p-2 sw-mx-8 xl:sw-mx-16 sw-w-2/5 lg:sw-w-3/5 2xl:sw-w-1/2',
            s.containerBorder
          )}
        >
          {services.map((item) => (
            <div
              className={cn(
                'sw-w-full lg:sw-w-31 sw-mx-16 xl:sw-mx-2 sw-my-2 sw-p-4 sw-rounded-sm sw-cursor-pointer',
                s.serviceItem
              )}
              key={item.id}
            >
              <div className="op-w-9/12 sw-mx-auto">
                <Image
                  src={item.iconLink}
                  width={192}
                  height={192}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="sw-uppercase sw-font-bold">{t(item.name)}</h3>
                {/* <p className="sw-text-xs">{t(item.desc)}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
