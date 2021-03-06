import LogicalExpression from '../Logic/LogicalExpression';
import type { ComparisonOperator } from '../Logic/Operators';
import type { ComparableType } from '../Logic/LogicalExpression';

/**
 * Maps a field name to a ComparableType, which is the value of field.
 */
export type RowMappedType = {
	[key: string]: ComparableType;
};

/**
 * Describes a comparison of a row value to a specified value.
 */
export class RowComparison {
	fieldName: string;
	comparison: ComparisonOperator;
	value: ComparableType;

	constructor(fieldName: string, comparison: ComparisonOperator, value: ComparableType) {
		this.fieldName = fieldName;
		this.comparison = comparison;
		this.value = value;
	}

	toString() {
		return `${this.fieldName} ${this.comparison} ${this.value}`;
	}
}


/**
 * Stores a list of RowComparison objects and offers a method for evaluating a row based on the comparisons.
 */
export class RowFilter {
	/**
	 * Array of RowComparison objects that will be used to evaluate a row to determine if it matches the filter.
	 */
	comparisons: RowComparison[];

	constructor(comparisons: RowComparison[]) {
		this.comparisons = comparisons;
	}

	/**
	 * Compares rowMap to one or more RowComparison objects.
	 */
	evaluateRow(rowMap: RowMappedType): boolean {
		let expressions: LogicalExpression[] = [];

		// For each row comparison, build a LogicalExpression and add it to the expressions array so we can evaluate
		// all of the expressions at once.
		for (const rowComparison of this.comparisons) {
			if (!(rowComparison.fieldName in rowMap)) {
				throw new Error(`${rowComparison.fieldName} field does not exist in RowMap.`);
			}

			// We can safely cast rowMap.get() to a ComparableType since an exception would have been thrown if the field did
			// not exist in the RowMap.
			let fieldValue = rowMap[rowComparison.fieldName];
			let expression = new LogicalExpression(fieldValue, rowComparison.value, rowComparison.comparison);

			expressions.push(expression);
		}

		return LogicalExpression.evaluateMultiple(expressions);
	}
}