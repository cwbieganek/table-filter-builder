// React
import React from 'react';

// Blueprint JS compenents
import { Card, Elevation } from '@blueprintjs/core';


// Custom Modules
import { RowFilter } from "../../modules/Filter/RowFilter";

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
	 * Callback that will be expected when the user creates a filter.
	 */
	onFilterCreated?: (rowFilter: RowFilter) => void;
}

const FilterBuilder: React.FC<IProps> = ({ fields }) => {
	function onCreateFilterButtonClick(event: React.MouseEvent<HTMLElement>) {
		alert("Create Filter button was clicked.");
	}

	return (
		<Card elevation={Elevation.TWO}>
			<ComparisonBuilder fields={fields} title="Comparison 1"></ComparisonBuilder>
		</Card>
	);
};

export default FilterBuilder;
