import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

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
