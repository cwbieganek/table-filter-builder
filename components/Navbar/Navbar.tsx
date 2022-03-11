import React from 'react';

import styles from './Navbar.module.css';

export interface Props extends React.HTMLProps<HTMLDivElement> {
	title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
};

export default Navbar;