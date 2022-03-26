// React
import React from 'react';

// Blueprint JS
import { Card, Elevation } from '@blueprintjs/core';


// Custom Modules
import { RowFilter } from "../../modules/Filter/RowFilter";
import type { RowComparison } from '../../modules/Filter/RowFilter';

// Custom components
import ComparisonBuilder from '../ComparisonBuilder/ComparisonBuilder';

/**
 * Represents a field/column in a table.
 */
export interface IField {
	/**
	 * The name of the column.
	 */
	name: string;

	/**
	 * The type of the column (text, number, etc.).
	 */
	type: "TEXT" | "NUMBER" | "DATE";
}

export interface IProps extends React.HTMLProps<HTMLDivElement> {
	/**
	 * A list of the fields that can be used in the FilterBuilder.
	 */
	fields: IField[];

	/**
	 * Callback that will be executed when the user creates a filter.
	 */
	onFilterCreated?: (rowFilter: RowFilter) => void;
}

/**
 * A component for creating multiple row comparisons that can be used to filter
 * the contents of a table.
 */
const FilterBuilder: React.FC<IProps> = ({ fields }) => {
	function onComparisonCreated(rowComparison: RowComparison) {
		console.log("A row comparison was created:");
		console.log(rowComparison);
	}

	return (
		<Card elevation={Elevation.TWO}>
			<ComparisonBuilder fields={fields} title="Comparison 1" onComparisonCreated={onComparisonCreated}></ComparisonBuilder>
		</Card>
	);
};

export default FilterBuilder;
