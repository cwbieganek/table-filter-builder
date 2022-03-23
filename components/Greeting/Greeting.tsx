import React from 'react';

import styles from './Greeting.module.css';

export interface Props extends React.HTMLProps<HTMLDivElement> {
	firstName: string;
	lastName: string;
}

const Greeting: React.FC<Props> = ({ firstName, lastName }) => {
	return (
		<div>
			<h1 className={styles.h1}>Hello {firstName} {lastName}!</h1>
		</div>
	);
};

export default Greeting;