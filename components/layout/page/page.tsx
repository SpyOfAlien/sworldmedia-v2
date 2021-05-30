import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './page.module.scss';
import Modal from '../modal/modal';
import { useUI } from '../../../lib/context/ui-context';
import dynamic from 'next/dynamic';
import services from '../../../lib/data/services';
import Menu from '../../common/menu/menu';
import { motion, AnimatePresence } from 'framer-motion';

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
  const { closeModal, displayModal, modalView, openModal, setModalView } =
    useUI();
  const [isActiveHumburger, setIsActiveHumburger] = useState(false);

  useEffect(() => {
    setIsActiveHumburger(displayModal);
  }, [displayModal]);

  const onHamburgerClick = () => {
    if (isActiveHumburger) {
      closeModal();
      setIsActiveHumburger(!isActiveHumburger);
    } else {
      openModal();
      setModalView('MENU');
    }
  };

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
    </div>
  );
};

export default Page;
