import LogicalExpression from "../modules/Filter/LogicalExpression";

describe('LogicalExpression', () => {
  describe('evaluate()', () => {
    it('correctly compares two numbers', () => {
      let logicalExpression = new LogicalExpression(1, 2, "<");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(1, 2, ">");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression(2, 1, "<");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression(2, 1, ">");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(2, 2, "<=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(2, 2, ">=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(2, 2, "!=");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression(2, 3, "!=");
      expect(logicalExpression.evaluate()).toBeTruthy();
    });
  
    it('correctly compares two strings', () => {
      let logicalExpression = new LogicalExpression("a", "b", "<");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "b", ">");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression("b", "a", "<");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression("b", "a", ">");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "a", "<=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "a", ">=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "a", "=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "b", "!=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression("a", "a", "!=");
      expect(logicalExpression.evaluate()).toBeFalsy();
    });
  
    it('correctly compares two dates', () => {
      let dateA = new Date(2022, 1, 1);
      let dateB = new Date(2022, 1, 2);
  
      let logicalExpression = new LogicalExpression(dateA, dateB, "<");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(dateA, dateB, ">");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression(dateB, dateA, "<");
      expect(logicalExpression.evaluate()).toBeFalsy();
  
      logicalExpression = new LogicalExpression(dateB, dateA, ">");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(dateA, dateA, "<=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(dateA, dateA, ">=");
      expect(logicalExpression.evaluate()).toBeTruthy();
  
      logicalExpression = new LogicalExpression(dateA, dateA, "=");
      expect(logicalExpression.evaluate()).toBeTruthy();
    });
  
    it('throws a ComparisonError when an invalid operator is passed', () => {
      let logicalExpression = new LogicalExpression(1, 2, "");
      expect(logicalExpression.evaluate).toThrow();
    });
  });

  describe('evaluateMultiple()', () => {
    it('returns true when all expressions are true', () => {
      let expressions = [
        new LogicalExpression(1, 2, "<"),
        new LogicalExpression(1, 2, "<"),
        new LogicalExpression(1, 2, "<")
      ];
  
      expect(LogicalExpression.evaluateMultiple(expressions)).toBeTruthy();
    });
  
    it('returns false when one of the expressions is false', () => {
      let expressions = [
        new LogicalExpression(1, 2, "<"),
        new LogicalExpression(1, 2, "<"),
        new LogicalExpression(2, 1, "<")
      ];
  
      expect(LogicalExpression.evaluateMultiple(expressions)).toBeFalsy();
    });
  });
});