import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Footer, FooterProps } from './Footer';

const footerMock = {
  id: 1,
  fullName: 'Mark Johnson',
  imgUrl:
    'https://images.pexels.com/photos/2373220/pexels-photo-2373220.jpeg?cs=srgb&dl=pexels-filippo-peisino-2373220.jpg&fm=jpg',
  occupation: 'Developer',
};

export default {
  title: 'Organisms/Footer',
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
