import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: { },
};

Light.decorators = [StoreDecorator({ } as StateSchema)];

export const Dark: Story = {
  args: { },
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ } as StateSchema)];

export const Auth: Story = {
  args: { },
};

Auth.decorators = [StoreDecorator({ user: { authData: { } } } as StateSchema)];
