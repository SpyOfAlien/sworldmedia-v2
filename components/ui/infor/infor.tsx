import { useTranslation } from 'react-i18next';
import Gmail from '../../icons/gmail';
import Location from '../../icons/location';
import Phone from '../../icons/phone';
import Heading from '../typo/heading';
import Paragraph from '../typo/paragraph';

const Infor = ({ heading = true }) => {
  const { t } = useTranslation();

  return (
    <div>
      {heading && (
        <Heading h="h5" cl="sw-text-white sw-mb-xsm">
          {t('contact__infor')}
        </Heading>
      )}

      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Phone />
        </span>
        <p className="sw-text-white sw-ml-2 sw-font-normal">
          (+84) 817 701 604
        </p>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Gmail />
        </span>
        <p className="sw-text-white sw-ml-2 sw-font-normal">
          info@s-worldmedia.com
        </p>
      </span>
      <span className="sw-flex sw-mb-sm">
        <span className="sw-block">
          <Location />
        </span>
        <p className="sw-text-white sw-ml-2 sw-font-normal">
          {t('contact__address__content')}
        </p>
      </span>
    </div>
  );
};

export default Infor;
