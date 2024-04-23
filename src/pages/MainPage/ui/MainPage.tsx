import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {t('Main page')}
      <Input value={value} onChange={onChange} placeholder="Type some text" />
    </div>
  );
}

export default MainPage;
