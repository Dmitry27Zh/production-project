import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export function SidebarItem({ item, collapsed }: SidebarItemProps) {
  console.log(collapsed);

  return (
    <AppLink to={item.path} theme={AppLinkTheme.SECONDARY} className={cls.item}>
      <item.Icon className={cls.icon} />
      <span className={cls.linkText}>{t(item.text)}</span>
    </AppLink>
  );
}
