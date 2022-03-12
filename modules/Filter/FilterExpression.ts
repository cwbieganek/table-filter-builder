export type ComparableType = string | number | Date;

export default class FilterExpression {
  left: ComparableType;
  right: ComparableType;
  operator: string;

  constructor(left: ComparableType, right: ComparableType, operator: string) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  public evaluate(): boolean {
    return true;
  }
}