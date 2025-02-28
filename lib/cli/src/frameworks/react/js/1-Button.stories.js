import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  onClick: action('onClick'),
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  ),
};
Emoji.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => (
  <Button onClick={linkTo('example-introduction--page')}>Go to Welcome Story</Button>
);
ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
