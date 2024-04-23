import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  ChangeEvent, InputHTMLAttributes, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = React.memo(({
  className, value, onChange, type, placeholder, autoFocus, ...otherProps
}: InputProps) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };
  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart ?? 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          className={cls.input}
          autoFocus={autoFocus}
          {...otherProps}
        />
        <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />
      </div>
    </div>
  );
});
