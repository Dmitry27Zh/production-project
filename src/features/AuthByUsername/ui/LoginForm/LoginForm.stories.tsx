import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: { },
};

Primary.decorators = [StoreDecorator({ login: { username: '123', password: 'asd' } } as StateSchema)];

export const WithError: Story = {
  args: { },
};

WithError.decorators = [StoreDecorator({ login: { username: '123', password: 'asd', error: 'ERROR' } } as StateSchema)];

export const Loading: Story = {
  args: { },
};

Loading.decorators = [StoreDecorator({ login: { isLoading: true } } as StateSchema)];
