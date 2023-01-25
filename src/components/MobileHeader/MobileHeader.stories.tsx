import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileHeader } from './MobileHeader';

export default {
  title: 'MobileHeader',
  component: MobileHeader,
} as ComponentMeta<typeof MobileHeader>;

const Template: ComponentStory<typeof MobileHeader> = (args) => (
  <MobileHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profileImg: 'assets/authorization/pimfy_profile.png',
};
