import { Meta, Story } from '@storybook/react';
import React from 'react';
import { RedirectLink, RedirectLinkProps } from './RedirectLink';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/RedirectLink',
  component: RedirectLink,
} as Meta;

// With named export we define component's story
export const Default: Story<RedirectLinkProps> = (args) => (
  <RedirectLink {...args}>Components</RedirectLink>
);

// Define default arguments for the Default story
Default.args = {
  href: '#',
};

// Second story
export const DarkMode: Story<RedirectLinkProps> = (args) => (
  <div className='dark'>
    <RedirectLink {...args}>Components</RedirectLink>
  </div>
);

// Define default arguments for the DarkMode component and inherit arguments from Default component
DarkMode.args = {
  ...Default.args,
};
