import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Footer, FooterProps } from './Footer';

const footerMock = {};

export default {
  title: 'Templates/Footer',
  component: Footer,
} as Meta;

export const Default: Story<FooterProps> = (args) => <Footer {...args} />;
Default.args = {};

// Second story
export const DarkMode: Story<FooterProps> = (args) => (
  <div className='dark'>
    <Footer {...args} />
  </div>
);

// Define default arguments for the DarkMode component and inherit arguments from Default component
DarkMode.args = {
  ...Default.args,
};
