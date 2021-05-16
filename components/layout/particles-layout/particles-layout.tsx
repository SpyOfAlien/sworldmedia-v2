import Particles from 'react-particles-js';
import { FC } from 'react';

import cn from 'classnames';
import styles from './particles-layout.module.scss';

import particles from '../../../lib/particles/particles';

interface Props {
  children?: any;
  className?: string;
}

const ParticlesLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Particles
        className={cn('bg-gray-800 w-screen h-screen', styles.under)}
        params={particles}
      />
      {children}
    </>
  );
};

export default ParticlesLayout;
