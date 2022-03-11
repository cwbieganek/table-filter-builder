import React from 'react';
import { useState } from 'react';

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
	let [ selectedFieldName, setSelectedFieldName ] = useState("");

	function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFieldName(event.currentTarget.value);
	}

	return (
		<div>
			<h2>Filter Builder</h2>
			<HTMLSelect onChange={onChange}>
				<option selected>Choose a field...</option>
				{fields.map((field, i) => {
					return <option key={i} value={field.name}>{field.name}</option>;
				})}
  		</HTMLSelect>
			<div>Selected field name: {selectedFieldName}</div>
		</div>
	);
};

export default Greeting;
