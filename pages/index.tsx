import Head from 'next/head';

import { useEffect, useState } from 'react';

// Global blueprint CSS
import '../node_modules/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/table/lib/css/table.css';
import '../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';

// Custom components
import Greeting from '@/components/Greeting/Greeting';
import FilterBuilder from '@/components/FilterBuilder/FilterBuilder';
import TableExample from '@/components/TableExample/TableExample';

// Custom modules
import { getFake2dArray } from "@/modules/Fake";

// Custom types
import type { ComparableType } from '@/modules/Logic/LogicalExpression';
import type { RowFilter } from '@/modules/Filter/RowFilter';

// Custom classes
import LogicalExpression from '@/modules/Logic/LogicalExpression';

import styles from '@/pages/index.module.css';

type ColumnNameToIndex = {
	[key: string]: number;
};

function renderLoading() {
	return(
		<h2>Loading data...</h2>
	);
}

export default function Home() {
	const [fakeRows, setFakeRows] = useState<ComparableType[][]>([]);
	const [filteredRows, setFilteredRows] = useState<ComparableType[][]>(fakeRows);
	const [loadingData, setLoadingData] = useState<boolean>(true);

	const columnNameToIndex: ColumnNameToIndex = {
		"First Name": 0,
		"Last Initial": 1,
		"Age": 2,
		"Job Title": 3,
		"Salary": 4,
		"Tenure": 5
	};

	// Get fake data asynchronously, but only once
	useEffect(() => {
		getFake2dArray().then((fakeRows) => {
			setFakeRows(fakeRows);
			setFilteredRows(fakeRows);
			setLoadingData(false);
		});
	}, []);

	function onFilterCreate(rowFilter: RowFilter) {
		const newRows = fakeRows.filter((row: ComparableType[]) => {
			return rowPredicate(row, columnNameToIndex, rowFilter);
		})

		setFilteredRows(newRows);
	}

	function rowPredicate(row: ComparableType[], columnNameToIndex: ColumnNameToIndex, rowFilter: RowFilter): boolean {
		const logicalExpressions = rowFilter.comparisons.map((rowComparison) => {
			const fieldValue = row[columnNameToIndex[rowComparison.fieldName]];
			return new LogicalExpression(fieldValue, rowComparison.value, rowComparison.comparison);
		});

		return LogicalExpression.evaluateMultiple(logicalExpressions);
	}

	function renderTable(filteredRows: ComparableType[][]) {
		if (filteredRows.length === 0) {
			return;
		}

		return <TableExample rows={filteredRows} />;
	}

	return (
		<>
			<Head>
				<title>Table Filter Builder</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Greeting firstName='Chris' lastName='Bieganek' />

			<div className={styles.filterBuilderContainer}>
				<FilterBuilder fields={[
					{name: "First Name", type: "TEXT"},
					{name: "Last Initial", type: "TEXT"},
					{name: "Age", type: "NUMBER"},
					{name: "Job Title", type: "TEXT"},
					{name: "Salary", type: "NUMBER"},
					{name: "Tenure", type: "NUMBER"}
				]} onFilterCreate={onFilterCreate} />
			</div>
			
			<div className={styles.tableExampleContainer}>
				{loadingData ? renderLoading() : null}
				{renderTable(filteredRows)}
			</div>
		</>
	);
}
