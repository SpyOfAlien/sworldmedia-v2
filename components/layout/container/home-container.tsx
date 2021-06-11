import { FC } from 'react';
import cn from 'classnames';
import s from './container.module.scss';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

interface Props {
  children: any;
  cl?: string;
  isFullpage?: boolean;
  isVisible?: boolean;
  hasPadding?: boolean;
  smallPadding?: boolean;
}

const HomeContainer: FC<Props> = ({
  children,
  cl,
  isFullpage = false,
  hasPadding = true,
  isVisible,
  smallPadding = false,
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
            'md:sw-absolute md:sw-inset-0  sw-mt-16 md:sw-mt-0',
            {
              [s.container]: !isFullpage,
              [s.padding]: hasPadding,
              [s.smallPadding]: smallPadding,
            },
            cl
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeContainer;
