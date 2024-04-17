import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam.', isOpen: true },
};

export const Dark: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam.', isOpen: true },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
