import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export function Navbar({ className }: NavBarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          About
        </AppLink>
      </div>
    </div>
  );
}
