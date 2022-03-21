import { RowMappedType, RowComparison, RowFilter } from "../modules/Filter/RowFilter";

describe('RowFilter', () => {
	describe('evaluateRow()', () => {
		// Create test data
		let rowMapChris: RowMappedType = {
			"name": "Chris",
			"age": 33,
			"birthday": new Date(1988, 9, 7) // October 7th, 1988
		};

		it('correctly returns true', () => {
			let comparisons = [
				new RowComparison("name", "=", "Chris"),
				new RowComparison("age", "=", 33)
			];
			let rowFilter = new RowFilter(comparisons);

			expect(rowFilter.evaluateRow(rowMapChris)).toBeTruthy();
		});

		it('correctly returns false', () => {
			// Create test data
			let comparisons = [
				new RowComparison("name", "=", "Jennifer"),
				new RowComparison("age", "=", 21)
			];
			let rowFilter = new RowFilter(comparisons);

			expect(rowFilter.evaluateRow(rowMapChris)).toBeFalsy();
		});

		it('throws an Error when a field name does not exist in the RowMap', () => {
			let comparisons = [
				new RowComparison("foo", "=", "Jennifer"),
				new RowComparison("bar", "=", 21)
			];
			let rowFilter = new RowFilter(comparisons);

			expect(() => { rowFilter.evaluateRow(rowMapChris); }).toThrow();
		});
	});
});
