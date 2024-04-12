import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Text' },
};

export const Clear: Story = {
  args: { children: 'Text', theme: ButtonTheme.CLEAR },
};

export const Outline: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE },
};

export const OutlineL: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.L },
};

export const OutlineXL: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.XL },
};

export const OutlineDark: Story = {
  args: { children: 'Text', theme: ButtonTheme.OUTLINE },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
  args: { children: 'Text', theme: ButtonTheme.BACKGROUND },
};

export const BackgroundInverted: Story = {
  args: { children: 'Text', theme: ButtonTheme.BACKGROUND_INVERTED },
};

export const Square: Story = {
  args: { children: '>', theme: ButtonTheme.BACKGROUND_INVERTED, square: true },
};

export const SquareL: Story = {
  args: {
    children: '>', theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: '>', theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.XL,
  },
};
