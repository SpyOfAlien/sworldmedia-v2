import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const HomePartner = () => {
  const { t } = useTranslation('common');
  return (
    <section className="sw-mb-40">
      <h3 className="sw-text-white sw-text-barlow sw-text-h3 sw-font-bold sw-text-center sw-mb-12">
        {t('home__core_partner__title')}
      </h3>
      <div className="sw-w-full lg:sw-w-3/5 sw-mx-auto">
        <Image
          alt="sworld partner"
          src="/assets/images/clients/partner.png"
          width={1556}
          height={876}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default HomePartner;
