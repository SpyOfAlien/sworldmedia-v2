import Accordion from '../../common/accordion';
import { useTranslation } from 'next-i18next';

const AboutWhyUs = ({ whyUs, special }) => {
  const { t } = useTranslation();

  const reasons = [
    {
      question: 'about__sw__special__one',
      answer: 'about__sw__special__one__desc',
    },
    {
      question: 'about__sw__special__two',
      answer: 'about__sw__special__two__desc',
    },
    {
      question: 'about__sw__special__three',
      answer: 'about__sw__special__three__desc',
    },
    {
      question: 'about__sw__special__four',
      answer: 'about__sw__special__four__desc',
    },
  ];

  return (
    <section className="sw-text-white sw-w-4/5 sw-mx-auto">
      <h3 className="sw-text-h4 sw-text-center sw-text-barlow sw-font-bold sw-mb-12">
        {t('about__whysw')}
      </h3>
      <div className="sw-w-4/5 lg:sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          {t('about__sw__human')}
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          {t('about__sw__human__desc')}
        </p>
      </div>
      <div className="sw-w-4/5 lg:sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          {t('about__sw__culture')}
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          {t('about__sw__culture__desc')}
        </p>
      </div>
      <div className="sw-w-4/5 lg:sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          {t('about__sw__connect')}
        </h6>
        <p className="sw-gilroy-thin sw-text-sm">
          {t('about__sw__connect__desc')}
        </p>
      </div>

      <div className="sw-w-4/5 lg:sw-w-3/5 sw-mb-8">
        <h6 className="sw-text-h5 sw-text-barlow sw-font-bold sw-mb-6">
          {t('about__sw__special')}
        </h6>
        <div>
          <Accordion data={reasons} size="sm" />
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;
