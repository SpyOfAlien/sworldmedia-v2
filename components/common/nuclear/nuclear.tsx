import { motion, useAnimation } from 'framer-motion';
import useScrollDirection from '../../../lib/hook/scrollDirection';
import { useState, useEffect, FC, ReactNode } from 'react';
import { useAnimatedState } from 'framer-motion/types/animation/use-animated-state';
import { ControlsAnimationDefinition } from 'framer-motion/types/animation/types';
import style from './nuclear.module.scss';
import cn from 'classnames';
import { useSection } from '../../../lib/context/section-context';

interface Props {
  children?: ReactNode;
  className?: string;
  showElectron?: boolean;
}

const Nuclear: FC<Props> = ({ className, children, showElectron }) => {
  const { onScrollUp, onScrollDown, currentSection } = useSection();

  return (
    <motion.div
      className={cn(
        'w-2 h-2 bg-yellow-500 flex items-center justify-center rounded-full cursor-pointer relative',
        className
      )}
    >
    </motion.div>
  );
};

export default Nuclear;
