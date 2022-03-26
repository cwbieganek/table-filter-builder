// React
import React from 'react';
import { useState } from 'react';

// Blueprint JS components
import { Button, HTMLSelect } from '@blueprintjs/core';

// Custom modules
import { COMPARISON_OPERATORS } from '../../modules/Logic/Operators';
import { RowFilter } from "../../modules/Filter/RowFilter";

// Custom CSS
import styles from './ComparisonBuilder.module.css';

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
	 * A title or name for the filter.
	 */
	title?: string;

	/**
	 * Callback that will be expected when the user creates a filter.
	 */
	onFilterCreated?: (rowFilter: RowFilter) => void;
}

const ComparisonBuilder: React.FC<IProps> = ({ fields, title }) => {
	let [ selectedFieldName, setSelectedFieldName ] = useState("");
	let [ selectedComparisonOperator, setSelectedComparisonOperator ] = useState("");
	

	function renderTitle() {
		return (
			<h2 className={styles.centerText}>{title}</h2>
		);
	}

	// Event handlers
	function onFieldNameSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFieldName(event.currentTarget.value);
	}

	function onComparisonOperatorSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedComparisonOperator(event.currentTarget.value);
	}

	function onCreateFilterButtonClick(event: React.MouseEvent<HTMLElement>) {
		alert("Create Filter button was clicked.");
	}

	return (
		<div>
			{ title && renderTitle() }
			<div className={styles.row}>
				<HTMLSelect onChange={onFieldNameSelectChange} defaultValue="">
					<option value="">Choose a field...</option>
					{fields.map((field, i) => {
						return <option key={i} value={field.name}>{field.name}</option>;
					})}
				</HTMLSelect>
			</div>
			<div className={styles.row}>Selected field name: {selectedFieldName}</div>
			<div className={styles.row}>
				<HTMLSelect onChange={onComparisonOperatorSelectChange} defaultValue="">
					<option value="">Choose a comparison...</option>
					{COMPARISON_OPERATORS.map((comparisonOperator, i) => {
						return <option key={i} value={comparisonOperator}>{comparisonOperator}</option>;
					})}
				</HTMLSelect>
			</div>
			<div className={styles.row}>Selected comparison: {selectedComparisonOperator}</div>
			<Button icon="add" onClick={onCreateFilterButtonClick}>Create Filter</Button>
		</div>
	);
};

export default ComparisonBuilder;
