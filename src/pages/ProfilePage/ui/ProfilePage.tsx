import { useTranslation } from 'react-i18next';

function ProfilePage() {
  const { t } = useTranslation('main');

  return (
    <div>{t('PROFILE_PAGE')}</div>
  );
}

export default ProfilePage;
