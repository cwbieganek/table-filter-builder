import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Greeting from './Greeting';
import { Alignment } from './Greeting';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Greeting',
	component: Greeting,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Greeting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Greeting> = (args) => <Greeting {...args} />;

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
	firstName: "Jane",
	lastName: "Doe",
	alignment: Alignment.CENTER
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// };
