import { FC } from 'react';
import cn from 'classnames';
import s from './input.module.scss';

interface Props {
  placeholder: string;
  label: string;
  cl?: string;
  rows?: number;
  onChange: (data) => void;
}

const Tetxarea: FC<Props> = ({
  placeholder,
  label,
  cl,
  rows = 6,
  onChange,
}) => {
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
      <textarea
        className={cn('sw-p-3 sw-rounded-sm sw-border sw-w-full', s.input)}
        onChange={handleOnChange}
        placeholder={placeholder}
        name="input"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows={rows}
      />
    </div>
  );
};

export default Tetxarea;
