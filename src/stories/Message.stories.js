import React from 'react';

import Message from '../components/Message';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <Message {...args}>This is a message for you!</Message>
);

export const PrimaryMessage = Template.bind({});
PrimaryMessage.args = {
  primary: true,
  label: 'Message',
};

export const SecondaryMessage = Template.bind({});
SecondaryMessage.args = {
  label: 'Message',
};
