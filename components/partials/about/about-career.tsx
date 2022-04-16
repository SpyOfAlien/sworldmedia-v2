import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const AboutCareer = () => {
  const { t } = useTranslation('common');

  return (
    <section className="sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-text-white sw-relative sw-py-32 sw-px-8 lg:sw-px-24">
      <div className="sw-absolute sw-inset-0">
        <div className="sw-w-full">
          <Image src="/assets/images/others/career-glow.png" layout="fill" />
        </div>
      </div>
      <div className="sw-w-full md:sw-w-1/2 sw-z-10">
        <div className="sw-w-3/5 md:sw-w-1/2 md:sw-mb-4 sw-mx-auto">
          <Image
            src="/assets/images/others/sworld-career.png"
            width={308}
            height={273}
            layout="responsive"
            alt="Sworld Career"
          />
        </div>
      </div>
      <div className="sw-w-full md:sw-w-1/2 sw-flex sw-flex-col sw-justify-center sw-z-10">
        <span className="sw-mb-4">Welcome</span>
        <h3 className="sw-mb-4 sw-text-h3 sw-font-bold ">
          {t('about__career_welcome')}
        </h3>
        <p className="sw-mb-4 sw-font-normal sw-gilroy-thin">
          {t('about__career_welcome_desc')}
        </p>
        <a
          href="https://www.linkedin.com/company/s-worldmultimedia/"
          className="sw-text-barlow sw-w-40 sw-h-12 sw-rounded-xs sw-glass sw-flex sw-items-center sw-justify-center"
        >
          S-World linkedin
        </a>
      </div>
    </section>
  );
};

export default AboutCareer;
