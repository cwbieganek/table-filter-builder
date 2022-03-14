import { ComparisonOperator } from "./Logic";

export type ComparableType = string | number | Date;

export class ComparisonError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default class FilterExpression {
  /**
   * The value on the left side of the expression. Will always be the value of a specific field.
   */
  left: ComparableType;

  /**
   * The value on the right side of the expression that a field value will be compared to.
   */
  right: ComparableType;

  /**
   * The comparison operator that will be used to compare the left and right values, such as >, <, or =.
   */
  operator: ComparisonOperator;

  constructor(left: ComparableType, right: ComparableType, operator: ComparisonOperator) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  /**
   * Evaluates the expression and returns a boolean.
   */
  public evaluate(): boolean {
    switch (this.operator) {
      case "<":
        return this.left < this.right;
      case "<=":
        return this.left <= this.right;
      case "=":
        return this.left === this.right;
      case ">":
        return this.left > this.right;
      case ">=":
          return this.left >= this.right;
      case "!=":
        return this.left != this.right;
      default:
        throw new ComparisonError(`${this.operator} is not valid a operator. Must be a ComparisonOperator type.`);
    }
  }
}