import { FC } from 'react';
import cn from 'classnames';
import s from './container.module.scss';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

interface Props {
  children: any;
  cl?: string;
  isFullpage?: boolean;
  isVisible?: boolean;
}

const Container: FC<Props> = ({
  children,
  cl,
  isFullpage = false,
  isVisible,
}) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className={cn(
            'sw-absolute sw-inset-0',
            { [s.container]: !isFullpage },
            cl
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Container;
