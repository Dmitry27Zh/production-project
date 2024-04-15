import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Lang' : 'Language')}
    </Button>
  );
}
