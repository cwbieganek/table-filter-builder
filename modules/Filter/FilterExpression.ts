import { ComparisonOperator } from "./Logic";

export type ComparableType = string | number | Date;

export class ComparisonError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default class FilterExpression {
  left: ComparableType;
  right: ComparableType;
  operator: ComparisonOperator;

  constructor(left: ComparableType, right: ComparableType, operator: ComparisonOperator) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

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
      default:
        throw new ComparisonError(`${this.operator} is not valid a operator. Must be a ComparisonOperator type.`);
    }
  }
}