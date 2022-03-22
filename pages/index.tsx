import  { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

// Global blueprint CSS
import '../node_modules/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/table/lib/css/table.css';

// Blueprint components
import { 
	Alignment, 
	Button, 
	Classes, 
	Navbar, 
	NavbarGroup, 
	NavbarHeading 
} from '@blueprintjs/core';

// Custom components
import Greeting from '@/components/Greeting/Greeting';
import FilterBuilder from '@/components/FilterBuilder/FilterBuilder';

import { FakeRecord, getFakeData } from '../modules/Fake';

import styles from '@/pages/index.module.css';

export default function Home() {
	return (
		<div className={`${Classes.DARK} ${styles.container}`}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar>
				<NavbarGroup align={Alignment.CENTER}>
					<NavbarHeading>Table Filter Builder</NavbarHeading>
				</NavbarGroup>
			</Navbar>

			<main>
				<Greeting firstName='Chris' lastName='Bieganek' />
				<FilterBuilder fields={[
					{name: "First Name", type: "TEXT"},
					{name: "Last Name", type: "TEXT"},
					{name: "Age", type: "NUMBER"}
				]}/>
			</main>

			<footer className={styles.footer}>Footer</footer>
		</div>
	);
}
