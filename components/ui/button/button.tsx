import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import s from './button.module.scss';

interface Props {
  type: string;
  text: string;
  icon?: string;
  cl?: string;
  onclick: () => void;
}

const Button: FC<Props> = ({ type, text, icon, cl, onclick }) => {
  return (
    <div className={cn(s.button, cl, s[type])} onClick={onclick}>
      <span
        style={{ lineHeight: 'inherit' }}
        className="sw-font-bold sw-justify-center sw-text-brown"
      >
        {' '}
        {text}{' '}
      </span>
      {icon ? (
        <Image
          src={icon}
          width={25}
          height={25}
          layout="responsive"
          quality={100}
        />
      ) : null}
    </div>
  );
};

export default Button;
