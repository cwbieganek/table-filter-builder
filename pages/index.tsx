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

import styles from '@/pages/index.module.css';

function renderLoading() {
	return(
		<h2>Loading data...</h2>
	);
}

export default function Home() {
	const [fakeRows, setFakeRows] = useState<ComparableType[][]>([]);
	const [loadingData, setLoadingData] = useState<boolean>(true);

	// Get fake data asynchronously, but only once
	useEffect(() => {
		getFake2dArray().then((fakeRows) => {
			console.log("Got fake data:");
			console.log(fakeRows);
			setFakeRows(fakeRows);
			setLoadingData(false);
		});
	}, []);

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
				]}/>
			</div>
			
			<div className={styles.tableExampleContainer}>
				{loadingData ? renderLoading() : <TableExample rows={fakeRows}/>}
			</div>
		</>
	);
}
