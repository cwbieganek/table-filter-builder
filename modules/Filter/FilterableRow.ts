import { ComparisonOperator } from '../Logic/Logic';
import { ComparableType } from '../Logic/LogicalExpression';

/**
 * Maps a field name to a ComparableType, which is the value of field.
 */
type RowMap = {
  [key: string]: ComparableType
}

/**
 * Describes a comparison of a row value to a specified value.
 */
class RowComparison {
  fieldName: string;
  comparison: ComparisonOperator;
  value: ComparableType;

  constructor(fieldName: string, comparison: ComparisonOperator, value: ComparableType) {
    this.fieldName = fieldName;
    this.comparison = comparison;
    this.value = value;
  }

  toString() {
    return `${this.fieldName} ${this.comparison} ${this.value}`;
  }
};

type Row = {
  fieldNames: string[];
  fieldValues: ComparableType[];
};

export default class FilterableRow {
  rowMap: RowMap;

  /**
   * Optional array of RowComparison objects that will be used to determine if the row matches a filter.
   */
  rowComparisons?: RowComparison[];

  constructor(fieldNames: string[], fieldValues: ComparableType[], rowComparisons?: RowComparison[]) {
    this.rowMap = {};

    // Populate the RowMap
    fieldNames.forEach((fieldName, i) => {
      this.rowMap[fieldName] = fieldValues[i];
    });

    this.rowComparisons = rowComparisons ? rowComparisons : undefined;
  }
}