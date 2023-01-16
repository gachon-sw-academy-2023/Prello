import WorkspaceImg from './WorkspaceImg';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'WorkspaceImg',
  component: WorkspaceImg,
} as ComponentMeta<typeof WorkspaceImg>;

const Template: ComponentStory<typeof WorkspaceImg> = (args) => (
  <WorkspaceImg {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: 'src/assets/authorization/pimfy_profile.png',
};

export const Round = Template.bind({});
Round.args = {
  ...Default.args,
  image: 'src/assets/authorization/pimfy_profile.png',
  radius: 'rounded',
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
