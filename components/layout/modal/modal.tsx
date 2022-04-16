import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import s from './modal.module.scss';
import Portal from '@reach/portal';
import { motion, AnimatePresence } from 'framer-motion';
import SubModal from './sub-modal';
import { useUI } from '../../../lib/context/ui-context';

interface Props {
  open: boolean;
  onClose: () => void;
  children: any;
  isFull?: boolean;
  subModal?: boolean;
}

const Modal: FC<Props> = ({ children, open, onClose, isFull, subModal }) => {
  const { closeSubModal, setConfirmData } = useUI();
  const subModalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      const node = subModalRef.current;
      if (node && !node.contains(event.target)) {
        setConfirmData({});
        closeSubModal();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      console.log('out');
    };
  }, [subModalRef]);

  useEffect(() => {
    console.log('vaooooooo', open);
    return () => {
      console.log('vaooo1', open);
    };
  }, []);

  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          !subModal ? (
            <motion.div
              className={cn(s.modal, { [s.full]: isFull })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={cn(s.content)}>{children}</div>
            </motion.div>
          ) : (
            <motion.div className={cn(s.modal, s.subModal)}>
              <div className="sw-relative sw-w-full sw-h-full sw-flex sw-justify-center sw-items-center">
                <div className="sw-absolute sw-inset-0 sw-bg-background sw-opacity-85"></div>
                <div className={cn(s.subContent)} ref={subModalRef}>
                  <SubModal>{children}</SubModal>
                </div>
              </div>
            </motion.div>
          )
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
