import Particles from 'react-particles-js';
import { FC } from 'react';

import cn from 'classnames';
import styles from './particles-layout.module.scss';

import particles from '../../../lib/data/particles';

interface Props {
  children?: any;
  cl?: string;
}

const ParticlesLayout: FC<Props> = ({ children, cl }) => {
  return (
    <>
      <Particles
        className={cn('sw-w-screen sw-h-screen', styles.under, cl)}
        params={particles}
      />
      {children}
    </>
  );
};

export default ParticlesLayout;
