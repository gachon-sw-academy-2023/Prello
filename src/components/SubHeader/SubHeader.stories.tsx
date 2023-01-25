import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubHeader } from './SubHeader';

export default {
  title: 'SubHeader',
  component: SubHeader,
} as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = (args) => (
  <SubHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  searchBar: false,
  profileImg: 'assets/authorization/pimfy_profile.png',
  children: 'board name',
};

export const WithSearchBar = Template.bind({});
WithSearchBar.args = {
  searchBar: true,
  profileImg: 'assets/authorization/pimfy_profile.png',
  children: 'board name',
};
