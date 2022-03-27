import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TableExample from './TableExample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Table Example',
	component: TableExample,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TableExample>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableExample> = (args) => <TableExample {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {};