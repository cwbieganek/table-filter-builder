// React
import React from 'react';

// Custom types
import type { ComparisonOperator } from '../../modules/Logic/Operators';
import type { ComparableType } from '@/modules/Logic/LogicalExpression';

// Custom CSS
import styles from './ComparisonSummary.module.css';

export interface IComparisonSummaryProps {
	fieldName: string,
	comparisonOperator: ComparisonOperator,
	comparisonValue: ComparableType,
	num: number
}

export default function ComparisonSummary ({ fieldName, comparisonOperator, comparisonValue, num }: IComparisonSummaryProps) {
	return (
		<div className={styles.comparisonSummary}>
			<h3>Comparison #{num}</h3>
			<div>{`${fieldName} ${comparisonOperator} ${comparisonValue}`}</div>
		</div>
	);
}
