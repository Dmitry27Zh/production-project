import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile/model/slice/profileSlice';

const reducers:ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string
}

function ProfilePage({ className }: ProfilePageProps) {
  const { t } = useTranslation('main');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(className)}>{t('PROFILE_PAGE')}</div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
