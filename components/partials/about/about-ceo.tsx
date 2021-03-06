import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const AboutCEO = () => {
  const { t } = useTranslation('common');

  return (
    <section className="sw-flex sw-flex-col-reverse lg:sw-flex-row sw-w-4/5 sw-mx-auto sw-justify-center sw-text-white sw-py-32">
      <div className="sw-w-full lg:sw-w-1/2">
        <h3 className="sw-text-h6 sw-font-bold sw-text-barlow sw-mb-6 sw-whitespace-pre-line">
          {t('aboutus__ceo')}
        </h3>
        <p className="sw-whitespace-pre-line">{t('aboutus__ceo__content')}</p>
      </div>
      <div className="sw-w-full lg:sw-w-1/2">
        <div className="sw-w-full sw-mb-8 lg:sw-mb-0 lg:sw-w-3/5 sw-mx-auto">
          <Image
            src="/assets/images/others/ceo.jpg"
            width={1536}
            height={2048}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
