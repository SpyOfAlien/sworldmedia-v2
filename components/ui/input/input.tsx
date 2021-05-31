import { FC } from 'react';
import cn from 'classnames';
import s from './input.module.scss';

interface Props {
  placeholder: string;
  label: string;
  cl?: string;
  onChange: (data) => void;
}

const Input: FC<Props> = ({ placeholder, label, cl, onChange }) => {
  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn(cl)}>
      <label
        className={cn(
          'sw-block sw-mb-1 sw-text-gradient sw-font-bold',
          s.label
        )}
        htmlFor="input"
      >
        {label}
      </label>
      <input
        className={cn('sw-p-3 sw-rounded-sm sw-border sw-w-full', s.input)}
        onChange={handleOnChange}
        placeholder={placeholder}
        name="input"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
