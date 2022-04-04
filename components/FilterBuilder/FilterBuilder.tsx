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

// Custom types
import type { IRowComparisonWithNum } from '../ComparisonSummary/ComparisonSummary';

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
	onFilterCreate?: (rowFilter: RowFilter) => void;
}

function renderComparisonSummaries(comparisons: IRowComparisonWithNum[], onDelete: (num: number) => void) {
	const comparisonSummaries = comparisons.map((comparison, i) => {
		return (
			<ComparisonSummary 
				key={comparison.num} 
				fieldName={comparison.fieldName} 
				comparisonOperator={comparison.comparison} 
				comparisonValue={comparison.value}
				num={comparison.num}
				onDelete={onDelete} />
		);
	});

	return (<div className={styles.comparisonSummariesContainer}>{comparisonSummaries}</div>);
}

/**
 * A component for creating multiple row comparisons that can be used to filter
 * the contents of a table.
 */
const FilterBuilder: React.FC<IProps> = ({ fields }) => {
	const [ comparisons, setComparisons ] = useState<IRowComparisonWithNum[]>([]);

	function onComparisonCreate(rowComparison: RowComparison) {
		let rowComparisonWithNum: IRowComparisonWithNum = {
			fieldName: rowComparison.fieldName,
			comparison: rowComparison.comparison,
			value: rowComparison.value,
			num: comparisons.length + 1
		}

		if (!comparisons) {
			setComparisons([rowComparisonWithNum]);
		}

		setComparisons([...comparisons, rowComparisonWithNum]);
	}

	function onComparisonDelete(num: number) {
		setComparisons(comparisons.filter((comparison) => {
			return comparison.num != num;
		}));
	}

	return (
		<div className={styles.filterBuilderContainer}>
			<Card elevation={Elevation.TWO}>
				<ComparisonBuilder fields={fields} title="Comparison 1" onComparisonCreated={onComparisonCreate}></ComparisonBuilder>
			</Card>
			{ comparisons ? renderComparisonSummaries(comparisons, onComparisonDelete) : null }
		</div>
	);
};

export default FilterBuilder;
