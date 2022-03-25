import Head from 'next/head';

// Global blueprint CSS
import '../node_modules/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/table/lib/css/table.css';

// Custom components
import Greeting from '@/components/Greeting/Greeting';
import FilterBuilder from '@/components/FilterBuilder/FilterBuilder';
import TableExample from '@/components/TableExample/TableExample';

import styles from '@/pages/index.module.css';

export default function Home() {
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
				<TableExample />
			</div>
		</>
	);
}
