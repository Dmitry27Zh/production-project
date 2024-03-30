import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NotFoundPageProps {
  className?: string
}

export function NotFoundPage({ className }: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('The page doesn\'t exist')}
    </div>
  );
}
