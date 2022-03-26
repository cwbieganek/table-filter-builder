import { render } from '@testing-library/react';
import FilterBuilder from '@/components/FilterBuilder/FilterBuilder';
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

		render(<FilterBuilder fields={fields} />);
	});
});
