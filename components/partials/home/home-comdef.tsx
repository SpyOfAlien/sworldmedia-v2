import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import s from './home.module.scss';

const HomeComDef = () => {
  const { t } = useTranslation('common');

  const defs = [
    {
      id: 'def1',
      name: 'home__about_us__vision__title',
      desc: 'home__about_us__vision__content',
      icon: '/assets/images/defs/vision.png',
    },
    {
      id: 'def2',
      name: 'home__about_us__mission__title',
      desc: 'home__about_us__mission__content',
      icon: '/assets/images/defs/mission.png',
    },
    {
      id: 'def3',
      name: 'home__about_us__core_value__title',
      desc: 'home__about_us__core_value__content',
      icon: '/assets/images/defs/core-value.png',
    },
  ];

  return (
    <section className="sw-mb-40">
      <div className="sw-flex sw-justify-between sw-text-white sw-w-3/5 sw-mx-auto">
        {defs.map((item) => (
          <div
            className={cn(
              'sw-w-31 sw-p-4 sw-relative sw-rounded-md sw-cursor-pointer sw-hover-glass',
              s.gradientBorder
            )}
            key={item.id}
          >
            {/* <div className="sw-absolute sw-soles"></div> */}
            <div className={cn()}></div>
            <div className="sw-w-3/5 sw-mx-auto">
              <Image
                src={item.icon}
                width={242}
                height={252}
                layout="responsive"
              />
            </div>
            <div className="sw-text-center ">
              <h3 className="sw-text-barlow sw-uppercase sw-font-semibold sw-text-h6">
                {t(item.name)}
              </h3>
              <p>{t(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeComDef;
