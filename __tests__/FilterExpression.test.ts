import FilterExpression from "../modules/Filter/FilterExpression";

describe('FilterExpression', () => {
  describe('evaluate()', () => {
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
  
      filterExpression = new FilterExpression(2, 2, "!=");
      expect(filterExpression.evaluate()).toBeFalsy();
  
      filterExpression = new FilterExpression(2, 3, "!=");
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
  
      filterExpression = new FilterExpression("a", "a", "=");
      expect(filterExpression.evaluate()).toBeTruthy();
  
      filterExpression = new FilterExpression("a", "b", "!=");
      expect(filterExpression.evaluate()).toBeTruthy();
  
      filterExpression = new FilterExpression("a", "a", "!=");
      expect(filterExpression.evaluate()).toBeFalsy();
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
  
      filterExpression = new FilterExpression(dateA, dateA, "=");
      expect(filterExpression.evaluate()).toBeTruthy();
    });
  
    it('throws a ComparisonError when an invalid operator is passed', () => {
      let filterExpression = new FilterExpression(1, 2, "");
      expect(filterExpression.evaluate).toThrow();
    });
  });

  describe('evaluateMultiple()', () => {
    it('returns true when all expressions are true', () => {
      let expressions = [
        new FilterExpression(1, 2, "<"),
        new FilterExpression(1, 2, "<"),
        new FilterExpression(1, 2, "<")
      ];
  
      expect(FilterExpression.evaluateMultiple(expressions)).toBeTruthy();
    });
  
    it('returns false when one of the expressions is false', () => {
      let expressions = [
        new FilterExpression(1, 2, "<"),
        new FilterExpression(1, 2, "<"),
        new FilterExpression(2, 1, "<")
      ];
  
      expect(FilterExpression.evaluateMultiple(expressions)).toBeFalsy();
    });
  });
});