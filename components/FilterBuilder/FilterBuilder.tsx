import React from 'react';

import { HTMLSelect } from '@blueprintjs/core';

export type LogicalOperator = "AND" | "OR";
export type ComparisonOperator = ">" | ">=" | "=" | "<=" | "<";

export interface Field {
	name: string;
	type: "TEXT" | "NUMBER";
}

export interface Props extends React.HTMLProps<HTMLDivElement> {
	fields: Field[];
}

const Greeting: React.FC<Props> = ({ fields }) => {
	return (
		<div>
			<h2>Filter Builder</h2>
			<select>
				<option selected>Choose a field...</option>
				{fields.map((field, i) => {
					return <option key={i} value={field.name}>{field.name}</option>;
				})}
  		</select>
		</div>
	);
};

export default Greeting;
