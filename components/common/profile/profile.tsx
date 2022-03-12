import { useTranslation } from 'next-i18next';
import s from './profile.module.scss';
import cn from 'classnames';
import Image from 'next/image';

const Profile = ({ profile }) => {
  const { t } = useTranslation('common');

  const onDownloadFile = (locale) => {
    locale === 'vn'
      ? window.open(`/pdf/${profile[1]}`)
      : window.open(`/pdf/${profile[0]}`);
  };

  return (
    <div className="sw-relative lg-py-8 lg:sw-py-12 sw-text-white sw-text-center">
      <div className={cn('sw-absolute sw-inset-0', s.glow)}></div>
      <h3 className="sw-font-bold sw-text-h3 sw-mb-8">
        {t('service__profile')}
      </h3>
      <p
        className={cn('sw-gilroy-thin lg:sw-w-3/5 sw-mx-auto sw-mb-8', s.legal)}
      >
        {t('service__profile__sologan')}
      </p>

      <div className="sw-flex sw-flex-col md:sw-flex-row sw-justify-center">
        <button
          onClick={() => onDownloadFile('en')}
          className={cn(
            'sw-rounded-sm focus:sw-outline-none sw-flex sw-items-center sw-py-3 sw-px-12 sw-bg-opacity-500 md:sw-mr-8 sw-mb-6 md:sw-mb-0',
            s.btn
          )}
        >
          <span className="sw-block sw-w-8 sw-h-8 sw-mr-2">
            <Image
              src="/assets/images/others/vn.png"
              width={24}
              height={24}
              layout="responsive"
            />
          </span>
          <span>{t('en')}</span>
        </button>
        <button
          onClick={() => onDownloadFile('vn')}
          className={cn(
            'sw-rounded-sm focus:sw-outline-none sw-flex sw-items-center sw-py-3 sw-px-12 sw-bg-opacity-500',
            s.btn
          )}
        >
          <span className="sw-block sw-w-8 sw-h-8 sw-mr-2">
            <Image
              src="/assets/images/others/en.png"
              width={24}
              height={24}
              layout="responsive"
            />
          </span>
          <span>{t('vn')}</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
