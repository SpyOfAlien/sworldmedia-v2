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

  const handleSwitchLng = () => {};

  const mediumScreen = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
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

      <div className={s.switchLng}>
        <Link href="/" locale="en">
          <a> en </a>
        </Link>
        <Link href="/" locale="vn">
          <a> vn </a>
        </Link>
      </div>
    </div>
  );
};

export default Page;
