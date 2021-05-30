import { FC } from 'react';
import cn from 'classnames';
import s from './modal.module.scss';
import Portal from '@reach/portal';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
  children: any;
}

const Modal: FC<Props> = ({ children, open, onClose }) => {
  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          <motion.div
            className={s.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={s.content}>{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
