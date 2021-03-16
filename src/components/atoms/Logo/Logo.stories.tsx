import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Logo, LogoProps } from './Logo';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {},
} as Meta;

// With named export we define component's story
export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
// Define default arguments for the Default story
Default.args = {};

// Second story
export const DarkMode: Story<LogoProps> = (args) => (
  <div className='dark'>
    <Logo {...args} />
  </div>
);
// Define default arguments for the DarkMode component and inherit arguments from Default component
DarkMode.args = {
  ...Default.args,
};
