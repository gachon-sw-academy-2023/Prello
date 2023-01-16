import SubTitle from './SubTitle';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'SubTitle',
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Workspace',
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
