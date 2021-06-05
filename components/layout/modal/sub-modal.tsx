import { FC } from 'react';
import cn from 'classnames';
import s from './modal.module.scss';
import Portal from '@reach/portal';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: any;
  cl?: string;
}

const SubModal: FC<Props> = ({ children, cl }) => {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn(s.subModal, cl)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={cn(s.subContent)}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SubModal;
