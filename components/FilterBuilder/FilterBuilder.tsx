import React from 'react';
import { useState } from 'react';

import { Card, Elevation, HTMLSelect } from '@blueprintjs/core';

import { COMPARISON_OPERATORS } from '../../modules/Logic/Logic';

// CSS
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
		<Card elevation={Elevation.TWO}>
			<h2 className={styles.centerText}>Filter Builder</h2>
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
		</Card>
	);
};

export default Greeting;
