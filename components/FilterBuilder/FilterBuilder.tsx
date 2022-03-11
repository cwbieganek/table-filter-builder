import React from 'react';

import { HTMLSelect } from '@blueprintjs/core';

export type LogicalOperator = "AND" | "OR";
export type ComparisonOperator = ">" | ">=" | "=" | "<=" | "<";

export interface IField {
	name: string;
	type: "TEXT" | "NUMBER";
}

export interface IProps extends React.HTMLProps<HTMLDivElement> {
	fields: IField[];
}

const Greeting: React.FC<IProps> = ({ fields }) => {
	return (
		<div>
			<h2>Filter Builder</h2>
			<HTMLSelect>
				<option selected>Choose a field...</option>
				{fields.map((field, i) => {
					return <option key={i} value={field.name}>{field.name}</option>;
				})}
  		</HTMLSelect>
		</div>
	);
};

export default Greeting;
