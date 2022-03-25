import React from "react";

// Blueprint JS
import { Alignment, Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";

// Blueprint CSS
import { Classes } from "@blueprintjs/core";

// Custom CSS
import styles from './Layout.module.css';

const TableExample: React.FC<{}> = ({ children }) => {
	return(
		<div className={`${Classes.DARK} ${styles.container}`}>
			<header className={styles.header}>
				<Navbar>
					<NavbarGroup align={Alignment.CENTER}>
						<NavbarHeading>Table Filter Builder</NavbarHeading>
					</NavbarGroup>
				</Navbar>
			</header>
			<main>
				{children}
			</main>
			<footer>Footer</footer>
		</div>
	);
};

export default TableExample;