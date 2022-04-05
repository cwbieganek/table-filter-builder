import React from 'react';

import styles from './Greeting.module.css';

export enum Alignment {
	LEFT = "LEFT",
	CENTER = "CENTER",
	RIGHT = "RIGHT"
}

export interface Props extends React.HTMLProps<HTMLDivElement> {
	firstName: string;
	lastName: string;
	alignment?: Alignment;
}

const Greeting: React.FC<Props> = ({ firstName, lastName, alignment }) => {
	let className = "";

	if (alignment) {
		switch (alignment) {
			case Alignment.LEFT:
				break;
			case Alignment.CENTER:
				className += (" " + styles.centerText);
				break;
			case Alignment.RIGHT:
				className += (" " + styles.rightText);
				break;
		}
	}

	className = className.trim();

	return (
		<h1 className={className}>Hello {firstName} {lastName}!</h1>
	);
};

export default Greeting;