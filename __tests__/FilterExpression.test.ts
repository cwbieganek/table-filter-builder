import FilterExpression from "../modules/Filter/FilterExpression";

describe('FilterExpression', () => {
  it('correctly compares two numbers', () => {
    let filterExpression = new FilterExpression(1, 2, "<");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(1, 2, ">");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression(2, 1, "<");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression(2, 1, ">");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(2, 2, "<=");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(2, 2, ">=");
    expect(filterExpression.evaluate()).toBeTruthy();
  });

  it('correctly compares two strings', () => {
    let filterExpression = new FilterExpression("a", "b", "<");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression("a", "b", ">");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression("b", "a", "<");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression("b", "a", ">");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression("a", "a", "<=");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression("a", "a", ">=");
    expect(filterExpression.evaluate()).toBeTruthy();
  });

  it('correctly compares two dates', () => {
    let dateA = new Date(2022, 1, 1);
    let dateB = new Date(2022, 1, 2);

    let filterExpression = new FilterExpression(dateA, dateB, "<");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(dateA, dateB, ">");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression(dateB, dateA, "<");
    expect(filterExpression.evaluate()).toBeFalsy();

    filterExpression = new FilterExpression(dateB, dateA, ">");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(dateA, dateA, "<=");
    expect(filterExpression.evaluate()).toBeTruthy();

    filterExpression = new FilterExpression(dateA, dateA, ">=");
    expect(filterExpression.evaluate()).toBeTruthy();
  });
});