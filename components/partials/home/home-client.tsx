import Slider from 'react-slick';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const HomeClients = () => {
  const { t } = useTranslation('common');

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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: 'product',
    cssEase: 'linear',
  };

  return (
    <section className="sw-w-4/5 sw-mx-auto sw-mb-40">
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
    </section>
  );
};

export default HomeClients;
