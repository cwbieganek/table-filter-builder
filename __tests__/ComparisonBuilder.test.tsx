import { render } from '@testing-library/react';
import ComparisonBuilder from '@/components/ComparisonBuilder/ComparisonBuilder';
import type { IField } from '@/components/ComparisonBuilder/ComparisonBuilder';

describe('Greeting', () => {
	it('renders without crashing', () => {
		// Test data
		let fields: IField[] = [
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

		render(<ComparisonBuilder title="Comparison 42" fields={fields} />);
	});
});
