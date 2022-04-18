import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './page.module.scss';
import Modal from '../modal/modal';
import { useUI } from '../../../lib/context/ui-context';
import dynamic from 'next/dynamic';
import services from '../../../lib/data/services';
import Menu from '../../common/menu/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { Media, MediaContextProvider } from '../../../lib/media';
import Header from '../header/header';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import subServices from '../../../lib/data/sub-services';
import Notification from '../notification/notification';
import { useSection } from '../../../lib/context/section-context';
import { useRouter } from 'next/router';
import Footer from '../footer/footer';

interface Props {
  children: any;
  pageProps: {
    page?: any;
  };
}

const Page: FC<Props> = ({ children, pageProps: { ...pageProps } }) => {
  const {
    closeModal,
    displayModal,
    modalView,
    displaySubModal,
    closeSubModal,
    subModalView,
    confirm,
  } = useUI();
  const { onSetSection, currentSection } = useSection();
  const router = useRouter();

  useEffect(() => {
    displayModal ? disableBodyScroll(document.body) : clearAllBodyScrollLocks();
  }, [displayModal]);

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
        <Header />
        <Modal subModal={true} open={displaySubModal} onClose={closeSubModal}>
          {subModalView === 'CONFIRM_MODAL' && confirm && <Notification />}
        </Modal>
        <Modal subModal={false} open={displayModal} onClose={closeModal}>
          {modalView === 'MENU' && <Menu />}
        </Modal>
        {router.pathname !== '/contact' && <Footer />}
      </div>
    </MediaContextProvider>
  );
};

export default Page;
