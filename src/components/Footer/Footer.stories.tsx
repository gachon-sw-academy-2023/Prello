import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;
export const Default = Template.bind({});
Default.args = {};
