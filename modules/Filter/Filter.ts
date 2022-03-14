import FilterExpression from "./FilterExpression";

export default class Filter {
  private _expressions: FilterExpression[];

  public evaluate(): boolean {
    let result: boolean = true;

    this._expressions.forEach((filterExpression) => {
      result = result && filterExpression.evaluate();
      if (!result) {
        // Short circuit since the result is false.
        return result;
      }
    });

    // true at this point
    return result;
  }

  constructor(expressions: FilterExpression[]) {
    this._expressions = expressions;
  }
}