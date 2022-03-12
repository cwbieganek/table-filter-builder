import Filter from "../modules/Filter/Filter";
import FilterExpression from "../modules/Filter/FilterExpression";

describe('Filter', () => {
  it('returns true when all expressions are true', () => {
    let expressions = [
      new FilterExpression(1, 2, "<"),
      new FilterExpression(1, 2, "<"),
      new FilterExpression(1, 2, "<")
    ];
    let testFilter = new Filter(expressions);

    expect(testFilter.evaluate()).toBeTruthy();
  });

  it('returns false when one of the expressions is false', () => {
    let expressions = [
      new FilterExpression(1, 2, "<"),
      new FilterExpression(1, 2, "<"),
      new FilterExpression(2, 1, "<")
    ];
    let testFilter = new Filter(expressions);

    expect(testFilter.evaluate()).toBeFalsy();
  });
});