import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ComparisonSummary from './ComparisonSummary';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Comparison Summary',
	component: ComparisonSummary,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ComparisonSummary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ComparisonSummary> = (args) => <ComparisonSummary {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
	fieldName: "Salary",
	comparisonOperator: ">",
	comparisonValue: 100000,
	num: 1,
	onDelete: () => { console.log(`Comparison summary #${1} delete button clicked.`); }
};
