import { FC } from 'react';
import cn from 'classnames';
import s from './modal.module.scss';
import Portal from '@reach/portal';

interface Props {
  open: boolean;
  onClose: () => void;
  children: any;
}

const Modal: FC<Props> = ({ children, open, onClose }) => {
  return (
    <Portal>
      {open ? (
        <div className={s.modal}>
          <div className={s.content}>{children}</div>
        </div>
      ) : null}
    </Portal>
  );
};

export default Modal;
