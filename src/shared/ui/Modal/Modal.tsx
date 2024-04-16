import { classNames } from 'shared/lib/classNames/classNames';
import {
  MouseEventHandler, ReactNode, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

export function Modal({
  className, children, isOpen, onClose,
}: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => {
    clearTimeout(timerRef.current);
  }, []);
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };
  const onContentClick: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onContentClick}>{children}</div>
      </div>
    </div>
  );
}
