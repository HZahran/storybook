/** @jsx h */
import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

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
  children: '😀 😎 👍 💯',
};

export const TextWithAction = () => (
  <Button onClick={() => action('This was clicked')()}>Trigger Action</Button>
);

TextWithAction.storyName = 'With an action';
TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => (
  <Button onClick={linkTo('example-introduction--page')}>Go to Welcome Story</Button>
);

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
