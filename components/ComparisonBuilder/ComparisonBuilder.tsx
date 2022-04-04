// #region Imports
// React
import React from 'react';
import { useState } from 'react';

// Blueprint JS components
import { Button, EditableText, HTMLSelect, NumericInput } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';

// Custom modules
import { COMPARISON_OPERATORS } from '../../modules/Logic/Operators';
import type { ComparisonOperator } from '../../modules/Logic/Operators';
import type { RowComparison } from "../../modules/Filter/RowFilter";
import type { ComparableType } from '../../modules/Logic/LogicalExpression';

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
	const [ selectedFieldName, setSelectedFieldName ] = useState<string | undefined>();
	const [ selectedFieldType, setSelectedFieldType ] = useState<FieldType | undefined>();
	const [ selectedComparisonOperator, setSelectedComparisonOperator ] = useState<ComparisonOperator | undefined>();
	const [ selectedComparisonValue, setSelectedComparisonValue ] = useState<ComparableType | undefined>();
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
				<Button icon="add" onClick={onAddComparisonButtonClick}>Add Comparison</Button>
			</div>
		);
	}

	function renderComparisonValueInput(
		fieldType: FieldType, 
		onValueChange: (v: ComparableType) => void) {
		let input: JSX.Element;

		function onDateChange(selectedDate: Date, isUserChange: boolean) {
			onValueChange(selectedDate);
		}

		function onNumberChange(valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement) {
			onValueChange(valueAsNumber);
		}

		switch (fieldType) {
			case "DATE":
				input = <DateInput onChange={onDateChange} />;
				break;
			case "NUMBER":
				input = <NumericInput min={1} onValueChange={onNumberChange}/>;
				break;
			case "TEXT":
				input = <EditableText minWidth={148} onChange={onValueChange} />;
				break;
		}

		return (
			<div className={styles.row}>
				<	div>Comparison Value:</div>
				{ input }
			</div>
		);
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
		setSelectedComparisonOperator(event.currentTarget.value as ComparisonOperator);
	}

	function onComparisonValueChange(v: ComparableType) {
		switch (typeof v) {
			case "string":
				setSelectedComparisonValue(v);
				break;
			case "number":
				setSelectedComparisonValue(v);
			case "object":
				setSelectedComparisonValue(v as Date);
				break;
			default:
				throw new Error(`${v} is not a ComparableType.`);
		}
	}

	function onAddComparisonButtonClick() {
		if (!validateInputs()) {
			alert("All parameters must be entered.");
			return;
		}

		// Inputs will all be valid at this point, so it is safe to typecast the values
		// in order to make TypeScript happy.
		let rowComparison: RowComparison = {
			fieldName: selectedFieldName as string,
			comparison: selectedComparisonOperator as ComparisonOperator,
			value: selectedComparisonValue as ComparableType
		};

		onComparisonCreated(rowComparison);
	}
	// #endregion

	// #region Utility Functions
	function validateInputs() {
		return selectedFieldType && selectedComparisonOperator && selectedComparisonValue;
	}
	// #endregion

	return (
		<div className={styles.container}>
			{ title && renderTitle() }
			{ renderFieldSelect() }
			{ renderComparisonOperatorSelect() }
			{ selectedFieldType ? renderComparisonValueInput(selectedFieldType, onComparisonValueChange) : null }
			{ renderAddComparisonButton() }
		</div>
	);
};
// #endregion

export default ComparisonBuilder;
