import Slider from 'react-slick';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { useWindowSize } from '../../../lib/hook';
import s from './home.module.scss';
import { Media } from '../../../lib/media';

const HomeClients = () => {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          left: `calc(50% + ${width / 2.4}px - 28px)`,
          top:
            width > 1280
              ? '80px'
              : width >= 1024
              ? '50px'
              : width > 720
              ? '20px'
              : '35px',
        }}
        className={cn(
          ' sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
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
        style={{
          left: `calc(50% - ${width / 2.4}px  - 20px)`,
          top:
            width > 1280
              ? '80px'
              : width >= 1024
              ? '50px'
              : width > 720
              ? '20px'
              : '35px',
        }}
        className={cn(
          ' sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
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

  const firstLine = [
    { id: '1', icon: '/assets/images/clients/vne.png' },
    { id: '2', icon: '/assets/images/clients/zing.png' },
    { id: '3', icon: '/assets/images/clients/vtv.png' },
    { id: '4', icon: '/assets/images/clients/fischer.png' },
    { id: '5', icon: '/assets/images/clients/vtc.png' },
    { id: '6', icon: '/assets/images/clients/metran.png' },
    { id: '7', icon: '/assets/images/clients/vov.png' },
  ];

  const secondLine = [
    { id: '1', icon: '/assets/images/clients/forbes.png' },
    { id: '2', icon: '/assets/images/clients/zing.png' },
    { id: '3', icon: '/assets/images/clients/vtv.png' },
    { id: '4', icon: '/assets/images/clients/ktdt.png' },
    { id: '5', icon: '/assets/images/clients/vtv.png' },
    { id: '6', icon: '/assets/images/clients/khcn.png' },
    { id: '7', icon: '/assets/images/clients/bp.png' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    swipeToSlide: true,
    className: 'product',
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="sw-mb-40 sw-relative">
      <Media greaterThanOrEqual="md">
        <div
          className="sw-absolute sw-w-full"
          style={{ bottom: width > 1024 ? '-20%' : '10%', opacity: 0.8 }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={1263}
            height={1213}
          />
        </div>
      </Media>
      <div className="sw-w-4/5 sw-mx-auto ">
        <div className="sw-mb-8">
          <h6 className="sw-text-white sw-text-barlow sw-text-h4 sw-font-bold sw-text-center sw-mb-12">
            {t('home__client__title')}
          </h6>
          <Slider {...settings}>
            {firstLine.map((item) => (
              <div key={item.id} className="sw-p-4 sw-mb-2">
                <div className="sw-bg-white sw-rounded-xs sw-p-2">
                  <Image
                    src={item.icon}
                    width={169}
                    height={95}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h6 className="sw-text-white sw-text-barlow sw-text-h4 sw-font-bold sw-text-center sw-mb-12">
            {t('home__partner__title')}
          </h6>
          <Slider {...settings}>
            {secondLine.map((item) => (
              <div key={item.id} className="sw-p-4 sw-mb-2">
                <div className=" sw-bg-white sw-rounded-xs sw-p-2">
                  <Image
                    src={item.icon}
                    width={169}
                    height={95}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
