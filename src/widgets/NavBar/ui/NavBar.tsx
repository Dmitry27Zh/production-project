import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './NavBar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavBarProps {
  className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          About
        </AppLink>
      </div>
    </div>
  )
}
