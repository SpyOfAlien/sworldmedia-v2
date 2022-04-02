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
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useHover } from '../../../lib/hook';

const Header = () => {
  const router = useRouter();

  const { t } = useTranslation('common');
  const { closeModal, openModal, setModalView, displayModal, modalView } =
    useUI();
  const { onSetSection } = useSection();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffset, setIsOffset] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const servicesModal = [
    'BRAND_COMMUNICATION',
    'BRANDING',
    'PRODUCTION',
    'INTERNAL_RELATION',
    'EVENT',
  ];

  const [serviceRef, isHoverService] = useHover<HTMLAnchorElement>();
  const [dropdownRef, isHoverDropdown] = useHover<HTMLDivElement>();

  useEffect(() => {
    if (isHoverService || isHoverDropdown) {
      setIsOpenDropdown(true);
    } else {
      setIsOpenDropdown(false);
    }
  }, [isHoverService, isHoverDropdown]);

  useEffect(() => {
    if (isActiveHumburger) {
      setIsActiveHumburger(false);
      closeModal();
      setIsOpenDropdown(false);
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

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -150 && router.pathname === '/') {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    if (currPos.y < -160 && router.pathname === '/') {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
    if (currPos.y < -250 && router.pathname === '/') {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  });

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
      className={cn(s.header, {
        [s.sticky]: isSticky,
        [s.offset]: isOffset,
        [s.scrolling]: isScrolling,
        [s.transparent]:
          (router.pathname === '/' && !isScrolling) ||
          router.pathname === '/contact',
      })}
    >
      <Container cl=" sw-relative sw-h-full sw-flex sw-items-center sw-justify-between">
        <div>
          <Media lessThan="lg">
            <div onClick={handleGoHome}>
              <WhiteLogo width="45px" height="45px" />
            </div>
          </Media>
          <Media greaterThanOrEqual="lg">
            {router.pathname !== '/contact' ? (
              <div
                onClick={handleGoHome}
                style={{ marginBottom: '10px', cursor: 'pointer' }}
              >
                <WhiteLogo width="60px" height="60px" />
              </div>
            ) : null}
          </Media>
        </div>
        <Media greaterThanOrEqual="md">
          <div className="sw-nav">
            <Link href="/">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-link nav-link">
                {t('menu__home')}
              </a>
            </Link>
            <Link href="/services">
              <a
                ref={serviceRef}
                className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-link nav-link sw-relative"
              >
                {t('menu__services')}
                {isOpenDropdown && (
                  <div
                    ref={dropdownRef}
                    className={cn(
                      'sw-absolute sw-flex sw-flex-col sw-px-4 sw-py-2 sw-glass',
                      s.serviceDropdown
                    )}
                  >
                    <Link href="/services/production">
                      <a className="sw-text-gradient sw-mb-2 ">
                        {t('home__service__production__title')}
                      </a>
                    </Link>
                    <Link href="/services/branding">
                      <a className="sw-text-gradient sw-mb-2 ">
                        {t('home__service__branding__title')}
                      </a>
                    </Link>
                    <Link href="/services/international-relation">
                      <a className="sw-text-gradient sw-mb-2 ">
                        {t('home__service__international_relations__title')}
                      </a>
                    </Link>
                    <Link href="/services/brand-communication">
                      <a className="sw-text-gradient sw-mb-2 ">
                        {t('home__service__brand_communication__title')}
                      </a>
                    </Link>
                    <Link href="/services/events">
                      <a className="sw-text-gradient">
                        {t('home__service__event__title')}
                      </a>
                    </Link>
                  </div>
                )}
              </a>
            </Link>
            <Link href="/about">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-link nav-link">
                {t('menu__about')}
              </a>
            </Link>
            <Link href="/blogs">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-mr-10 sw-text-link nav-link">
                {t('menu__news')}
              </a>
            </Link>
            <Link href="/contact">
              <a className="sw-mb-sm md:sw-mb-md sw-text-gradient sw-text-link nav-link">
                {t('menu__contact')}
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
              VN
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
              EN
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
