// React
import React from 'react';
import { useState } from 'react';

// Blueprint JS compenents
import { Button, Card, Elevation, HTMLSelect } from '@blueprintjs/core';


// Custom Modules
import { COMPARISON_OPERATORS } from '../../modules/Logic/Operators';
import { RowMappedType, RowComparison, RowFilter } from "../../modules/Filter/RowFilter";

// Custom components
import ComparisonBuilder from '../ComparisonBuilder/ComparisonBuilder';

// Custom CSS
import styles from './FilterBuilder.module.css';

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
	let [ selectedFieldName, setSelectedFieldName ] = useState("");

	function onFieldNameSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFieldName(event.currentTarget.value);
	}

	let [ selectedComparisonOperator, setSelectedComparisonOperator ] = useState("");

	function onComparisonOperatorSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedComparisonOperator(event.currentTarget.value);
	}

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
