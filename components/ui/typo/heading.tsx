import { FC } from 'react';
import cn from 'classnames';
import s from './typo.module.scss';

interface Props {
  children: any;
  cl?: string;
  h: string;
}

const Heading: FC<Props> = ({ children, cl, h }) => {
  return <h3 className={cn('sw-font-bold', cl, s[h])}>{children}</h3>;
};

export default Heading;
