import { FC, useEffect, useRef, useState } from 'react';
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
import Header from '../header/header';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

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
  const { closeModal, displayModal, modalView } = useUI();
  const main = useRef();

  useEffect(() => {
    displayModal ? disableBodyScroll(main) : enableBodyScroll(main);
  }, [displayModal]);

  return (
    <MediaContextProvider>
      <div className={s.root}>
        <AnimatePresence>
          <motion.main
            ref={main}
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

        <Media lessThan="md">
          <Header isSticky={true} />
        </Media>

        <Media greaterThanOrEqual="md">
          <Header isSticky={false} />
        </Media>
      </div>
    </MediaContextProvider>
  );
};

export default Page;
