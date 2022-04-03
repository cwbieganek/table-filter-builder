// React
import React, { useState } from 'react';

// Blueprint JS
import { Card, Elevation } from '@blueprintjs/core';


// Custom Modules
import { RowFilter } from "../../modules/Filter/RowFilter";
import type { RowComparison } from '../../modules/Filter/RowFilter';

// Custom components
import ComparisonBuilder from '../ComparisonBuilder/ComparisonBuilder';
import ComparisonSummary from '../ComparisonSummary/ComparisonSummary';

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
	 * Callback that will be executed when the user creates a filter.
	 */
	onFilterCreated?: (rowFilter: RowFilter) => void;
}

function renderComparisonSummaries(comparisons: RowComparison[]) {
	const comparisonSummaries = comparisons.map((comparison, i) => {
		return (
			<ComparisonSummary 
				key={i + 1} 
				fieldName={comparison.fieldName} 
				comparisonOperator={comparison.comparison} 
				comparisonValue={comparison.value}
				num={i + 1} />
		);
	});

	return (<div className={styles.comparisonSummariesContainer}>{comparisonSummaries}</div>);
}

/**
 * A component for creating multiple row comparisons that can be used to filter
 * the contents of a table.
 */
const FilterBuilder: React.FC<IProps> = ({ fields }) => {
	const [ comparisons, setComparisons ] = useState<RowComparison[]>([]);

	function onComparisonCreated(rowComparison: RowComparison) {
		setComparisons([...comparisons, rowComparison]);
	}

	return (
		<div className={styles.filterBuilderContainer}>
			<Card elevation={Elevation.TWO}>
				<ComparisonBuilder fields={fields} title="Comparison 1" onComparisonCreated={onComparisonCreated}></ComparisonBuilder>
			</Card>
			{ comparisons ? renderComparisonSummaries(comparisons) : null }
		</div>
	);
};

export default FilterBuilder;
