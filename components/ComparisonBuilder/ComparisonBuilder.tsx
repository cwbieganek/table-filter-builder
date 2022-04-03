// #region Imports
// React
import React from 'react';
import { useState } from 'react';

// Blueprint JS components
import { Button, HTMLSelect } from '@blueprintjs/core';

// Custom modules
import { COMPARISON_OPERATORS } from '../../modules/Logic/Operators';
import type { ComparisonOperator } from '../../modules/Logic/Operators';
import type { RowComparison } from "../../modules/Filter/RowFilter";

// Custom CSS
import styles from './ComparisonBuilder.module.css';
// #endregion

export type FieldType = "TEXT" | "NUMBER" | "DATE";

// #region Interfaces
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
	type: FieldType;
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
	 * Callback that will be expected when the user creates a comparison.
	 */
	onComparisonCreated: (rowComparison: RowComparison) => any;
}
// #endregion

// #region Component
/**
 * Component that is used to build a row comparison, which can be used as part of a row filter
 * for filter the contents of a table.
 */
const ComparisonBuilder: React.FC<IProps> = ({ fields, title, onComparisonCreated }) => {
	// #region Component State
	let [ selectedFieldName, setSelectedFieldName ] = useState("");
	let [ selectedFieldType, setSelectedFieldType ] = useState<FieldType | null>(null);
	let [ selectedComparisonOperator, setSelectedComparisonOperator ] = useState("");
	// #endregion
	
	// #region Local Renderers
	function renderTitle() {
		return (
			<h2 className={styles.centerText}>{title}</h2>
		);
	}

	function renderFieldSelect() {
		return (
			<div className={styles.row}>
				<HTMLSelect onChange={onFieldNameSelectChange} defaultValue="">
					<option value="">Choose a field...</option>
					{fields.map((field, i) => {
						return <option key={i} value={field.name}>{field.name}</option>;
					})}
				</HTMLSelect>
			</div>
		);
	}

	function renderComparisonOperatorSelect() {
		return (
			<div className={styles.row}>
				<HTMLSelect onChange={onComparisonOperatorSelectChange} defaultValue="">
					<option value="">Choose a comparison...</option>
					{COMPARISON_OPERATORS.map((comparisonOperator, i) => {
						return <option key={i} value={comparisonOperator}>{comparisonOperator}</option>;
					})}
				</HTMLSelect>
			</div>
		);
	}

	function renderAddComparisonButton() {
		return (
			<div className={styles.row}>
				<Button icon="add" onClick={() => {
					let rowComparison: RowComparison = {
						fieldName: selectedFieldName,
						comparison: selectedComparisonOperator as ComparisonOperator,
						value: "TODO"
					};
					onComparisonCreated(rowComparison);
				}}>Add Comparison</Button>
			</div>
		);
	}

	function renderComparisonValueInput(fieldType: FieldType) {
		switch (fieldType) {
			case "DATE":
				return (<div className="row">Date</div>);
			case "NUMBER":
				return (<div className="row">Number</div>);
			case "TEXT":
				return (<div className="row">Text</div>);
		}
	}
	// #endregion

	// #region Event Handlers
	function onFieldNameSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		let selectedValue = event.currentTarget.value;

		setSelectedFieldName(selectedValue);

		for (const field of fields) {
			if (field.name === selectedValue) {
				setSelectedFieldType(field.type);
				break;
			}
		}
	}

	function onComparisonOperatorSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedComparisonOperator(event.currentTarget.value);
	}
	// #endregion

	return (
		<div className={styles.container}>
			{ title && renderTitle() }
			{ renderFieldSelect() }
			{ renderComparisonOperatorSelect() }
			{ selectedFieldType ? renderComparisonValueInput(selectedFieldType) : null }
			{ renderAddComparisonButton() }
		</div>
	);
};
// #endregion

export default ComparisonBuilder;
