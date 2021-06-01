import { FC, useState } from 'react';
import cn from 'classnames';
import s from './subscribe.module.scss';
import Button from '../../ui/button/button';

interface Props {
  cl?: string;
}

const SubscribeForm: FC<Props> = ({ cl }) => {
  const [email, setEmail] = useState('');
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  const handleOnChange = (e: any) => {
    if (e) {
      setEmail(e.target.value);
    }
  };

  const handleSubscribe = async () => {
    if (email && emailRegex.test(email)) {
      const res = await fetch(
        'https://kayjurmuxf.execute-api.ap-southeast-1.amazonaws.com/dev/subscribe',
        {
          method: 'POST',
          body: JSON.stringify({ email: email, confirm: true }),
        }
      );
    }
  };

  return (
    <div
      className={cn(
        'sw-flex sw-bg-paragraph sw-py-1 sw-pr-1 sw-pl-4 sw-items-center sw-justify-between sw-rounded-sm',
        cl
      )}
    >
      <input
        className={cn(
          'sw-bg-paragraph focus:sw-outline-none sw-h-full sw-w-9/12 sw-rounded-sm',
          s.input
        )}
        placeholder="Email"
        type="email"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={handleOnChange}
      />
      <Button
        cl="sw-h-10 sw-w-32"
        text="Subscribe"
        type="gradient"
        onclick={handleSubscribe}
      />
    </div>
  );
};

export default SubscribeForm;
