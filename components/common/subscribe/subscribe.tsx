import { FC, useState } from 'react';
import cn from 'classnames';
import Paragraph from '../../ui/typo/paragraph';
import s from './subscribe.module.scss';

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
        'sw-flex sw-bg-paragraph sw-h-12 sw-py-1 sw-pr-1 sw-pl-4 sw-items-center sw-justify-between sw-rounded-sm',
        cl
      )}
    >
      <input
        className={cn(
          'sw-bg-paragraph focus:sw-outline-none sw-h-full sw-rounded-sm',
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
      <div
        className="sw-bg-modal sw-rounded-sm sw-h-10 sw-flex sw-items-center sw-justify-center sw-w-24 sw-cursor-pointer"
        onClick={handleSubscribe}
      >
        <Paragraph>Subscribe</Paragraph>
      </div>
    </div>
  );
};

export default SubscribeForm;
