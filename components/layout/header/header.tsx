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

const Header = ({ isSticky = false }) => {
  const router = useRouter();
  const { closeModal, openModal, setModalView, displayModal } = useUI();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    if (isActiveHumburger) {
      setIsActiveHumburger(false);
      closeModal();
    }

    if (
      router.pathname === '/' ||
      router.pathname === '/contact' ||
      isActiveHumburger
    ) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  }, [router]);

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
    if (lan === 'vn' && router.locale === 'en')
      router.push('/', '/', { locale: lan });
    if (lan === 'en' && router.locale === 'vn')
      router.push('/', '/', { locale: lan });
  };

  return (
    <div
      className={cn(
        s.header,
        `${isSticky || !isTransparent ? 'sw-bg-background' : null}`
      )}
    >
      <Container cl=" sw-relative sw-h-full sw-flex sw-items-center sw-justify-between">
        <div>
          <Media lessThan="lg">
            <div>
              <WhiteLogo width="65px" height="65px" />
            </div>
          </Media>
          <Media greaterThanOrEqual="lg">
            {router.pathname !== '/contact' ? (
              <div style={{ marginBottom: '10px', cursor: 'pointer' }}>
                <Link href="/">
                  <a>
                    <WhiteLogo />
                  </a>
                </Link>
              </div>
            ) : null}
          </Media>
        </div>
        )
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
        </div>
      </Container>
    </div>
  );
};

export default Header;
