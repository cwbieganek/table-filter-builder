/**
 * Binary logical operators such as AND, OR, etc.
 */
export type LogicalOperator = "AND" | "";

/**
 * Comparison operators such as >, =, <, etc.
 */
export type ComparisonOperator = ">" | ">=" | "=" | "!=" | "<=" | "<" | "";
 
/**
 * Array of binary logical operators such as AND, OR, etc.
 */
export const LOGICAL_OPERATORS: LogicalOperator[] = ["AND"];

/**
* Array of comparison operators such as >, =, <, etc.
*/
export const COMPARISON_OPERATORS: ComparisonOperator[] = [">", ">=", "=", "!=", "<=", "<"];