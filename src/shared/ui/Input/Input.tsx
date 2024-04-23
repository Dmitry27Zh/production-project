import { classNames } from 'shared/lib/classNames/classNames';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = React.memo(({
  className, value, onChange, type, placeholder,
}: InputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input type={type} value={value} onChange={onChangeHandler} className={cls.input} />
        <span className={cls.caret} />
      </div>
    </div>
  );
});
