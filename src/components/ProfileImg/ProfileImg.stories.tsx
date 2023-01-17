import ProfileImg from './ProfileImg';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'ProfileImg',
  component: ProfileImg,
} as ComponentMeta<typeof ProfileImg>;

const Template: ComponentStory<typeof ProfileImg> = (args) => (
  <ProfileImg {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: '/assets/workspace/sample-profile-image.png',
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
