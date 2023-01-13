import SideBar from './SideBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
