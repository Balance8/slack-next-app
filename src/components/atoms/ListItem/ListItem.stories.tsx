import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ListItem, ListItemProps } from './ListItem';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/ListItem',
  component: ListItem,
  argTypes: {
    variant: { control: 'select' },
  },
} as Meta;

// With named export we define component's story
export const Default: Story<ListItemProps> = (args) => <ListItem {...args} />;
// Define default arguments for the Default story
Default.args = {
  variant: 'leading',
  classes: 'w-64 h-64',
};

// Second story
export const WithText: Story<ListItemProps> = (args) => (
  <ListItem {...args}>
    <div>
      <span>Story that shows ListItem component with text</span>
    </div>
  </ListItem>
);
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl',
};
