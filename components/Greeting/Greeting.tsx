import React from 'react';

export interface Props extends React.HTMLProps<HTMLDivElement> {
	firstName: string;
	lastName: string;
}

const Greeting: React.FC<Props> = ({ firstName, lastName }) => {
	return (
		<div>
			<h1>Hello {firstName} {lastName}!</h1>
		</div>
	);
};

export default Greeting;