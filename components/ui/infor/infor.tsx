import { useTranslation } from 'react-i18next';
import Gmail from '../../icons/gmail';
import Location from '../../icons/location';
import Phone from '../../icons/phone';
import Heading from '../typo/heading';
import Paragraph from '../typo/paragraph';

const Infor = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Heading h="h5" cl="sw-text-paragraph sw-mb-xsm">
        {t('contact__infor')}
      </Heading>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Phone />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">(+84) 817 701 604</Paragraph>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Gmail />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">info@s-worldmedia.com</Paragraph>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Location />
        </span>
        <Paragraph cl="sw-ml-4 sw-font-normal">
          {t('contact__address__content')}
        </Paragraph>
      </span>
    </div>
  );
};

export default Infor;
