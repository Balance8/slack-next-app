import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SideBar, SideBarProps } from './SideBar';

const footerMock = {};

export default {
  title: 'Templates/SideBar',
  component: SideBar,
} as Meta;

export const Default: Story<SideBarProps> = (args) => <SideBar {...args} />;
Default.args = {};

// Second story
export const DarkMode: Story<SideBarProps> = (args) => (
  <div className='dark'>
    <SideBar {...args} />
  </div>
);

// Define default arguments for the DarkMode component and inherit arguments from Default component
DarkMode.args = {
  ...Default.args,
};
