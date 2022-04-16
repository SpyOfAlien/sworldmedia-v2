import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import s from './about.module.scss';
import cn from 'classnames';
import { useWindowSize } from '../../../lib/hook';

const AboutAdvisor = () => {
  const baseUrl = '/assets/images/advisors/';
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const advisors = [
    {
      name: t('about__advisor__mr__phuc'),
      img: `${baseUrl}tranNgocPhuc.jpg`,
      role: t('about__advisor__mr__phuc__swrole'),
      company: t('about__advisor__mr__phuc__role'),
    },
    {
      name: t('about__advisor__mr__donle'),
      img: `${baseUrl}donle.jpg`,
      role: t('about__advisor__mr__donle__swrole'),
      company: t('about__advisor__mr__donle__role'),
    },
    {
      name: t('about__advisor__ms__vyle'),
      img: `${baseUrl}vyLe.jpg`,
      role: t('about__advisor__ms__vyle__swrole'),
      company: t('about__advisor__ms__vyle__role'),
    },
    {
      name: t('about__advisor__mr__erik'),
      img: `${baseUrl}erikJonsson.jpg`,
      role: t('about__advisor__mr__erik__swrole'),
      company: t('about__advisor__mr__erik__role'),
    },

    // {
    //   name: 'Phan Văn Trường',
    //   img: `${baseUrl}phanVanTruong.jpg`,
    //   role: 'aboutus__organizational_advisor',
    //   company: 'Company role',
    // },

    {
      name: t('about__advisor__mr__hung'),
      img: `${baseUrl}nguyenQuocHung.png`,
      role: t('about__advisor__mr__hung__swrole'),
      company: t('about__advisor__mr__hung__role'),
    },
  ];

  return (
    <section className="sw-text-white sw-relative sw-py-40">
      <div
        className="sw-absolute sw-left-0 sw-right-0"
        style={
          width > 1280
            ? { bottom: '-160%', zIndex: -10 }
            : { bottom: '-20%', zIndex: -10 }
        }
      >
        <div className="sw-w-full">
          <Image
            src="/assets/images/common/light-globe.png"
            width={1440}
            height={1440}
            layout="responsive"
          />
        </div>
      </div>
      <h3 className="sw-text-center sw-mb-24 sw-text-h5 lg:sw-text-h3 sw-font-bold sw-text-barlow">
        {t('aboutus__advisor')}
      </h3>
      <div>
        <div className="sw-flex sw-flex-wrap sw-w-4/5 sw-mx-auto">
          {advisors.map((item) => (
            <div
              key={item.name}
              className="sw-w-full md:sw-w-1/2 lg:sw-w-1/5 sw-text-center sw-mb-8"
            >
              <div
                className={cn(
                  'sw-w-full sw-px-8 sw-mx-auto sw-mb-4',
                  s.advisorItem
                )}
              >
                <Image
                  src={item.img}
                  width={253}
                  height={255}
                  layout="responsive"
                  className="sw-rounded-xl"
                />
              </div>
              <div>
                <h6 className="sw-font-bold sw-mb-2">{item.name}</h6>
                <p className="sw-">{t(item.role)}</p>
                <p className="sw-gilroy-thin sw-w-4/5 sw-mx-auto sw-text-xs">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAdvisor;
