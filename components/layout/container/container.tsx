import { FC } from 'react';
import cn from 'classnames';
import s from './container.module.scss';

interface Props {
  children: any;
  cl?: string;
}

const Container: FC<Props> = ({ children, cl }) => {
  return <div className={cn(s.container, cl)}>{children}</div>;
};

export default Container;
