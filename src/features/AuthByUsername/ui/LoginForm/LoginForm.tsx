import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginReducer } from 'features/AuthByUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm = React.memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);
  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Log in form')} />
        {error && <Text text={t('Wrong login or password')} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Enter username')}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Enter password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Sign In')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
