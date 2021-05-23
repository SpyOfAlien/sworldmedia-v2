import { FC } from 'react';
import cn from 'classnames';

interface Props {
  children: string;
  cl?: string;
}

const Paragraph: FC<Props> = ({ children, cl }) => {
  return <p className={cn('sw-text-paragraph sw-text-p', cl)}>{children}</p>;
};

export default Paragraph;
