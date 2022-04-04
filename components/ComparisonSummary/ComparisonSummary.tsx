// React
import React from 'react';

// Blueprint
import { Icon } from '@blueprintjs/core';

// Custom types
import type { ComparisonOperator } from '../../modules/Logic/Operators';
import type { ComparableType } from '@/modules/Logic/LogicalExpression';
import type { RowComparison } from '@/modules/Filter/RowFilter';

// Custom CSS
import styles from './ComparisonSummary.module.css';

export interface IRowComparisonWithNum extends RowComparison {
	num: number
}

export interface IComparisonSummaryProps {
	fieldName: string,
	comparisonOperator: ComparisonOperator,
	comparisonValue: ComparableType,
	num: number,
	onDelete: (num: number) => void
}

export default function ComparisonSummary ({ fieldName, comparisonOperator, comparisonValue, num, onDelete }: IComparisonSummaryProps) {
	return (
		<div className={styles.comparisonSummary}>
			<div className={styles.iconContainer} onClick={() => { onDelete(num) }}>
				<Icon icon="cross" />
			</div>
			<h3>Comparison #{num}</h3>
			<div>{`${fieldName} ${comparisonOperator} ${comparisonValue}`}</div>
		</div>
	);
}
