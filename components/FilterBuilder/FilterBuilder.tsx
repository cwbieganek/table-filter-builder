import React from 'react';
import { useState } from 'react';

import { HTMLSelect } from '@blueprintjs/core';

/**
 * Binary logical operators such as AND, OR, etc.
 */
export type LogicalOperator = "AND" | "OR" | "";

/**
 * Comparison operators such as >, =, <, etc.
 */
export type ComparisonOperator = ">" | ">=" | "=" | "<=" | "<" | "";

// These will be used to populate the HTMLSelect components
const LOGICAL_OPERATORS: LogicalOperator[] = ["AND", "OR"];
const COMPARISON_OPERATORS: ComparisonOperator[] = [">", ">=", "=", "<=", "<"]; 

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
	type: "TEXT" | "NUMBER";
}

export interface IProps extends React.HTMLProps<HTMLDivElement> {
	/**
	 * A list of the fields that can be used in the FilterBuilder.
	 */
	fields: IField[];
}

const Greeting: React.FC<IProps> = ({ fields }) => {
	let [ selectedFieldName, setSelectedFieldName ] = useState("");

	function onFieldNameSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFieldName(event.currentTarget.value);
	}

	let [ selectedComparisonOperator, setSelectedComparisonOperator ] = useState("");

	function onComparisonOperatorSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedComparisonOperator(event.currentTarget.value);
	}

	return (
		<div>
			<h2>Filter Builder</h2>
			<HTMLSelect onChange={onFieldNameSelectChange}>
				<option selected>Choose a field...</option>
				{fields.map((field, i) => {
					return <option key={i} value={field.name}>{field.name}</option>;
				})}
  		</HTMLSelect>
			<div>Selected field name: {selectedFieldName}</div>
			<HTMLSelect onChange={onComparisonOperatorSelectChange}>
				<option selected>Choose a comparison...</option>
				{COMPARISON_OPERATORS.map((comparisonOperator, i) => {
					return <option key={i} value={comparisonOperator}>{comparisonOperator}</option>;
				})}
  		</HTMLSelect>
			<div>Selected comparison: {selectedComparisonOperator}</div>
		</div>
	);
};

export default Greeting;
