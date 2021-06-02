import { FC } from 'react';
import cn from 'classnames';
import s from './typo.module.scss';

interface Props {
  children: any;
  cl?: string;
  h: string;
  gradient?: boolean;
}

const Heading: FC<Props> = ({ children, cl, h, gradient = true }) => {
  return (
    <h3
      className={cn(`sw-font-bold ${gradient && 'sw-text-gradient'}`, cl, s[h])}
    >
      {children}
    </h3>
  );
};

export default Heading;
