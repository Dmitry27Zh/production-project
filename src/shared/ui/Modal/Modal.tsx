import { classNames } from 'shared/lib/classNames/classNames';
import {
  MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useWrapper } from 'app/providers/WrapperProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export function Modal({
  className, children, isOpen, onClose, lazy,
}: ModalProps) {
  const { element } = useWrapper();
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onContentClick: MouseEventHandler = (event) => {
    event.stopPropagation();
  };
  const onKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeydown);
    } else {
      document.removeEventListener('keydown', onKeydown);
    }

    return () => {
      clearTimeout(timerRef.current);
      document.removeEventListener('keydown', onKeydown);
    };
  }, [isOpen, onKeydown]);

  if (element && (!lazy || (lazy && isMounted))) {
    return (
      <Portal element={element}>
        <div className={classNames(cls.Modal, mods, [className])}>
          <div className={cls.overlay} onClick={closeHandler}>
            <div className={cls.content} onClick={onContentClick}>{children}</div>
          </div>
        </div>
      </Portal>
    );
  }
}
