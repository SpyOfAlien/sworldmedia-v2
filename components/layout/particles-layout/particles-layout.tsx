import Particles from 'react-particles-js';
import { FC } from 'react';

import cn from 'classnames';
import styles from './particles-layout.module.scss';

import particles from '../../../lib/data/particles';

interface Props {
  children?: any;
  className?: string;
}

const ParticlesLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Particles
        className={cn('sw-bg-background sw-w-screen sw-h-screen', styles.under)}
        params={particles}
      />
      {children}
    </>
  );
};

export default ParticlesLayout;
