import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const AboutSworld = () => {
  const { t } = useTranslation('common');

  return (
    <section className="sw-flex sw-w-4/5 sw-mx-auto sw-justify-center sw-text-white sw-py-32">
      <div className="sw-w-full lg:sw-w-1/2">
        <p className="sw-underline sw-mb-6">About us</p>
        <h6 className="sw-whitespace-pre-line sw-text-h5 sw-font-bold sw-text-barlow">
          {t('home__about_us__define')}
        </h6>
      </div>
      <div className="sw-w-full lg:sw-w-1/2">
        <div className="sw-w-3/5 sw-mx-auto">
          <Image
            src="/assets/images/others/ceo.png"
            width={401}
            height={384}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSworld;
