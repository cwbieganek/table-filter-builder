import { ComparisonOperator } from "./Logic";

export type ComparableType = string | number | Date;

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
    return true;
  }
}