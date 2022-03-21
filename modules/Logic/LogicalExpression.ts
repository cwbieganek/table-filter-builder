import { ComparisonOperator } from "./Operators";

export type ComparableType = string | number | Date;

export class ComparisonError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export default class LogicalExpression {
	static evaluateMultiple(expressions: LogicalExpression[]): boolean {
		let result: boolean = true;

		expressions.forEach((logicalExpression) => {
			result = result && logicalExpression.evaluate();
			if (!result) {
				// Short circuit since the result is false.
				return result;
			}
		});

		// true at this point
		return result;
	}

	/**
	 * The value on the left side of the expression.
	 */
	private _left: ComparableType;

	/**
	 * The value on the right side of the expression that a field value will be compared to.
	 */
	private _right: ComparableType;

	/**
	 * The comparison operator that will be used to compare the left and right values, such as >, <, or =.
	 */
	private _operator: ComparisonOperator;

	constructor(left: ComparableType, right: ComparableType, operator: ComparisonOperator) {
		this._left = left;
		this._right = right;
		this._operator = operator;
	}

	/**
	 * Evaluates the expression and returns a boolean.
	 */
	public evaluate(): boolean {
		switch (this._operator) {
			case "<":
				return this._left < this._right;
			case "<=":
				return this._left <= this._right;
			case "=":
				return this._left === this._right;
			case ">":
				return this._left > this._right;
			case ">=":
					return this._left >= this._right;
			case "!=":
				return this._left != this._right;
			default:
				throw new ComparisonError(`${this._operator} is not valid a operator. Must be a ComparisonOperator type.`);
		}
	}
}