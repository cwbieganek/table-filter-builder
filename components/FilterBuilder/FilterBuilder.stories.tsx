import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterBuilder from './FilterBuilder';
import type { IField } from './FilterBuilder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Filter Builder',
	component: FilterBuilder,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FilterBuilder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterBuilder> = (args) => <FilterBuilder {...args} />;

// Example fields
let exampleFields: IField[] = [
	{
		name: "Title",
		type: "TEXT"
	},
	{
		name: "Salary",
		type: "NUMBER"
	},
	{
		name: "Age",
		type: "NUMBER"
	}
];

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
	fields: exampleFields
};
