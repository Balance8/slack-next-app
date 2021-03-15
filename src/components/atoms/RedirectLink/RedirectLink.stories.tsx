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
  <RedirectLink {...args} />
);
// Define default arguments for the Default story
Default.args = {
  text: 'Components',
};

// Second story
export const DarkMode: Story<RedirectLinkProps> = (args) => (
  <div className='dark'>
    <RedirectLink {...args} />
  </div>
);
// Define default arguments for the WithText component and inherit arguments from Default component
DarkMode.args = {
  ...Default.args,
};
