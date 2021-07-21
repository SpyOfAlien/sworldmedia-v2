import { Container } from '..';
import WhiteLogo from '../../icons/white-logo';
import Image from 'next/image';
import { Media, MediaContextProvider } from '../../../lib/media';
import Link from 'next/link';
import s from './header.module.scss';
import { useRouter } from 'next/router';
import { useUI } from '../../../lib/context/ui-context';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useSection } from '../../../lib/context/section-context';
import { useTranslation } from 'next-i18next';

const Header = ({ isSticky = false }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const {
    closeModal,
    openModal,
    setModalView,
    displayModal,
    modalView,
  } = useUI();
  const { onSetSection } = useSection();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const servicesModal = [
    'BRAND_COMMUNICATION',
    'BRANDING',
    'PRODUCTION',
    'INTERNAL_RELATION',
    'EVENT',
  ];

  useEffect(() => {
    if (isActiveHumburger) {
      setIsActiveHumburger(false);
      closeModal();
    }

    if (router.pathname === '/' || router.pathname === '/contact') {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    displayModal ? setIsActiveHumburger(true) : setIsActiveHumburger(false);
  }, [displayModal]);

  const onHamburgerClick = () => {
    if (isActiveHumburger) {
      closeModal();
      setIsActiveHumburger(!isActiveHumburger);
    } else {
      openModal();
      setModalView('MENU');
      setIsActiveHumburger(!isActiveHumburger);
    }
  };

  const handleSwitchLng = (lan) => {
    if (router.pathname === '/blogs/[slug]') {
      const vnSlug =
        router['components']['/blogs/[slug]']['props']['pageProps']['post'][
          'vnSlug'
        ];
      const enSlug =
        router['components']['/blogs/[slug]']['props']['pageProps']['post'][
          'enSlug'
        ];

      if (lan === 'vn' && router.locale === 'en')
        router.push(
          router.asPath.replace(enSlug, vnSlug),
          router.asPath.replace(enSlug, vnSlug),
          {
            locale: lan,
          }
        );

      if (lan === 'en' && router.locale === 'vn') {
        router.push(
          router.asPath.replace(vnSlug, enSlug),
          router.asPath.replace(vnSlug, enSlug),
          {
            locale: lan,
          }
        );
      }
    } else {
      if (lan === 'vn' && router.locale === 'en')
        router.push(router.asPath, router.asPath, {
          locale: lan,
        });

      if (lan === 'en' && router.locale === 'vn')
        router.push(router.asPath, router.asPath, {
          locale: lan,
        });
    }
  };

  const handleGoHome = () => {
    onSetSection(1);
    router.push('/');
  };

  return (
    <div
      className={cn(
        s.header,
        `${
          ((isSticky || !isTransparent) && !isActiveHumburger) ||
          servicesModal.includes(modalView)
            ? 'sw-bg-background'
            : null
        }`
      )}
    >
      <Container cl=" sw-relative sw-h-full sw-flex sw-items-center sw-justify-between">
        <div>
          <Media lessThan="lg">
            <div onClick={handleGoHome}>
              <WhiteLogo width="65px" height="65px" />
            </div>
          </Media>
          <Media greaterThanOrEqual="lg">
            {router.pathname !== '/contact' ? (
              <div
                onClick={handleGoHome}
                style={{ marginBottom: '10px', cursor: 'pointer' }}
              >
                <WhiteLogo />
              </div>
            ) : null}
          </Media>
        </div>
        <Media greaterThanOrEqual="md">
          <div>
            <Link href="/">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-h6">
                {' '}
                {t('menu__home')}{' '}
              </a>
            </Link>
            <Link href="/services">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-h6">
                {' '}
                {t('menu__services')}{' '}
              </a>
            </Link>
            <Link href="/about">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-h6">
                {' '}
                {t('menu__about')}{' '}
              </a>
            </Link>
            <Link href="/blogs">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-h6">
                {' '}
                {t('menu__news')}{' '}
              </a>
            </Link>
            <Link href="/contact">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-text-h6">
                {' '}
                {t('menu__contact')}{' '}
              </a>
            </Link>
          </div>
        </Media>
        <div className="sw-flex sw-items-center">
          <div className={s.switchLng}>
            <div
              className="sw-text-paragraph sw-cursor-pointer"
              onClick={() => handleSwitchLng('vn')}
            >
              {' '}
              VN{' '}
            </div>

            <div
              style={{ height: '24px', pointerEvents: 'none' }}
              className="sw-mx-2"
            >
              {router.locale !== 'vn' ? (
                <Image src="/assets/svg/switch.svg" width={40} height={20} />
              ) : (
                <Image
                  src="/assets/svg/switch-reverse.svg"
                  width={40}
                  height={20}
                />
              )}
            </div>

            <div
              className="sw-text-paragraph sw-cursor-pointer"
              onClick={() => handleSwitchLng('en')}
            >
              {' '}
              EN{' '}
            </div>
          </div>
          <Media lessThan="md">
            <div
              className={cn(s.hamburger, s.hamburgerSlider, {
                [s.active]: isActiveHumburger,
              })}
              onClick={onHamburgerClick}
            >
              <div className={s.hamburgerBox}>
                <span className={s.hamburgerInner}></span>
              </div>
            </div>
          </Media>
        </div>
      </Container>
    </div>
  );
};

export default Header;
