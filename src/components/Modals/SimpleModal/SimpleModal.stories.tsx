import { ComponentStory, ComponentMeta } from '@storybook/react';
import SimpleModal from './SimpleModal';

export default {
  title: 'SimpleModal',
  component: SimpleModal,
} as ComponentMeta<typeof SimpleModal>;

const Template: ComponentStory<typeof SimpleModal> = (args) => (
  <SimpleModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '모달',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'lg',
};
