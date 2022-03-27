import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import s from './home.module.scss';
import { Media, MediaContextProvider } from '../../../lib/media';
import Slider from 'react-slick';
import { useWindowSize } from '../../../lib/hook';

const HomeComDef = () => {
  const { t } = useTranslation('common');

  const { width } = useWindowSize();

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ left: `calc(50% + ${width / 2.4}px - 48px)` }}
        className={cn(
          'sw-glass sw-rounded-full sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
          s.nextArrow
        )}
        onClick={onClick}
      >
        <div className="sw-w-4 sw-transform sw-rotate-180">
          <Image
            src="/assets/images/others/left-arrow.png"
            width={18}
            height={36}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ left: `calc(50% - ${width / 2.4}px)` }}
        className={cn(
          'sw-glass sw-rounded-full sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
          s.prevArrow
        )}
        onClick={onClick}
      >
        <div className="sw-w-4">
          <Image
            src="/assets/images/others/left-arrow.png"
            width={18}
            height={36}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  const settings = {
    className: 'home-project center',
    centerMode: true,
    infinite: true,
    centerPadding: `${width / 6}px`,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
    <section className="sw-mb-40 sw-text-white">
      <MediaContextProvider>
        <Media greaterThanOrEqual="md">
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
        </Media>
        <Media lessThan="md">
          <Slider {...settings}>
            {defs.map((item) => (
              <div
                className={cn(
                  'sw-p-4 sw-relative sw-rounded-md sw-cursor-pointer sw-hover-glass',
                  s.gradientBorder,
                  s.comdefItem
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
          </Slider>
        </Media>
      </MediaContextProvider>
    </section>
  );
};

export default HomeComDef;
