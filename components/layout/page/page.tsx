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
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import SubService from '../../common/services/sub-service/sub-service';
import subServices from '../../../lib/data/sub-services';
import Notification from '../notification/notification';

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
  const {
    closeModal,
    displayModal,
    modalView,
    displaySubModal,
    closeSubModal,
    subModalView,
    confirm,
  } = useUI();
  const main = useRef();

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

        <Modal isFull={true} open={displayModal} onClose={closeModal}>
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

        <Modal subModal={true} open={displaySubModal} onClose={closeSubModal}>
          {subModalView === 'BRANDING_CONCEPT' && (
            <SubService data={subServices.branding.concept} />
          )}
          {subModalView === 'BRANDING_IDENTITY' && (
            <SubService data={subServices.branding.brandIdentity} />
          )}
          {subModalView === 'BRANDING_STRATEGY' && (
            <SubService data={subServices.branding.brandStrategy} />
          )}

          {subModalView === 'BRANDING_COMMUNICATION_PR' && (
            <SubService data={subServices.brandCommunication.pr} />
          )}
          {subModalView === 'BRANDING_COMMUNICATION_SOCIAL' && (
            <SubService data={subServices.brandCommunication.social} />
          )}

          {subModalView === 'BRANDING_COMMUNICATION_KOL' && (
            <SubService data={subServices.brandCommunication.kol} />
          )}
          {subModalView === 'BRANDING_COMMUNICATION_MARKETING' && (
            <SubService data={subServices.brandCommunication.marketing} />
          )}
          {subModalView === 'PRODUCTION_CLIENT' && (
            <SubService data={subServices.production.client} />
          )}
          {subModalView === 'PRODUCTION_FORMAT' && (
            <SubService data={subServices.production.format} />
          )}

          {subModalView === 'EVENT_ONLINE' && (
            <SubService data={subServices.event.online} />
          )}
          {subModalView === 'EVENT_OFFLINE' && (
            <SubService data={subServices.event.offline} />
          )}

          {subModalView === 'INTERNATIONAL_RELATION_FOR_VN' && (
            <SubService data={subServices.internationalRelation.forVn} />
          )}
          {subModalView === 'INTERNATIONAL_RELATION_FOR_FOREIGN' && (
            <SubService data={subServices.internationalRelation.forForeign} />
          )}
          {subModalView === 'INTERNATIONAL_RELATION_FOR_VN_INTERNATIONAL' && (
            <SubService
              data={subServices.internationalRelation.vnInternational}
            />
          )}
          {subModalView === 'CONFIRM_MODAL' && confirm && <Notification />}
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
