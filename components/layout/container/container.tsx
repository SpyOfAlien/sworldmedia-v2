import { FC } from 'react';
import cn from 'classnames';

interface Props {
  children: any;
  cl?: string;
}

const Container: FC<Props> = ({ children, cl }) => {
  return (
    <div
      className={cn(
        'sw-w-11/12 md:sw-w-10/12 lg:sw-w-4/5 xl:sw-w-10/12 2xl:sw-w-10/12 3xl:sw-w-9/12 sw-mx-auto'
      )}
    >
      {children}
    </div>
  );
};

export default Container;
