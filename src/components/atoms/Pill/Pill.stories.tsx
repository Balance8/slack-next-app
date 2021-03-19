import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pill, PillProps } from './Pill';

export default {
  title: 'Atoms/Pill',
  component: Pill,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as Meta;

export const Default: Story<PillProps> = (args) => <Pill {...args} />;
Default.args = {
  backgroundColor: '#000',
  textColor: '#fff',
  text: 'Shoes',
};
