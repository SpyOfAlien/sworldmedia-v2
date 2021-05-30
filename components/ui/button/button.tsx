import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import s from './button.module.scss';

interface Props {
  type: string;
  text: string;
  icon?: string;
  cl?: string;
}

const Button: FC<Props> = ({ type, text, icon, cl }) => {
  return (
    <div className={cn(s.button, cl, s[type])}>
      <span> {text} </span>
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
