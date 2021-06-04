import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './page.module.scss';
import Modal from '../modal/modal';
import { useUI } from '../../../lib/context/ui-context';
import dynamic from 'next/dynamic';
import services from '../../../lib/data/services';
import Menu from '../../common/menu/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { ParticlesLayout } from '..';
import Link from 'next/link';
import { Container } from '../container';
import WhiteLogo from '../../icons/white-logo';
import Image from 'next/image';
import { Media, MediaContextProvider } from '../../../lib/media';

interface Props {
  children: any;
  pageProps: {
    page?: any;
  };
}

const ServiceDetail = dynamic(
  () => import('../../common/services/service-detail')
);

const Page: FC<Props> = ({ children, pageProps: { ...pageProps } }) => {
  const route = useRouter();
  const { closeModal, displayModal, modalView, openModal, setModalView } =
    useUI();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsActiveHumburger(displayModal);
  }, [displayModal]);

  useEffect(() => {
    if (isActiveHumburger) closeModal();
  }, [route]);

  const onHamburgerClick = () => {
    if (isActiveHumburger) {
      closeModal();
      setIsActiveHumburger(!isActiveHumburger);
    } else {
      openModal();
      setModalView('MENU');
    }
  };

  const handleSwitchLng = (lan) => {
    if (lan === 'vn' && router.locale === 'en')
      router.push('/', '/', { locale: lan });
    if (lan === 'en' && router.locale === 'vn')
      router.push('/', '/', { locale: lan });
  };

  return (
    <MediaContextProvider>
      <div className={s.root}>
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Modal open={displayModal} onClose={closeModal}>
          {modalView === 'BRAND_COMMUNICATION' && (
            <ServiceDetail data={services[0]} />
          )}
          {modalView === 'BRANDING' && <ServiceDetail data={services[1]} />}
          {modalView === 'PRODUCTION' && <ServiceDetail data={services[2]} />}
          {modalView === 'INTERNAL_RELATION' && (
            <ServiceDetail data={services[3]} />
          )}
          {modalView === 'EVENT' && <ServiceDetail data={services[4]} />}

          {modalView === 'MENU' && <Menu />}
        </Modal>

        <div className={s.header}>
          <Container cl="sw-relative sw-h-full sw-flex sw-items-center sw-justify-between">
            <div>
              <Media lessThan="lg">
                <div>
                  <WhiteLogo width="65px" height="65px" />
                </div>
              </Media>
              <Media greaterThanOrEqual="lg">
                <div style={{ marginBottom: '10px', cursor: 'pointer' }}>
                  <Link href="/">
                    <a>
                      <WhiteLogo />
                    </a>
                  </Link>
                </div>
              </Media>
            </div>
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
                    <Image
                      src="/assets/svg/switch.svg"
                      width={40}
                      height={20}
                    />
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
      </div>
    </MediaContextProvider>
  );
};

export default Page;
