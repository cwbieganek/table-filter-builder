// React
import React from "react";
import type { ReactElement } from "react"; 

// Blueprint
import { HotkeysProvider } from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import type { ICellProps } from "@blueprintjs/table";

// Custom types
import type { ComparableType } from "../../modules/Logic/LogicalExpression";

interface ITableExampleProps {
	rows: ComparableType[][];
}

const TableExample: React.FC<ITableExampleProps> = ({ rows }) => {	
	function cellRenderer (rowIndex: number, columnIndex: number): ReactElement<ICellProps> {
		return (<Cell>{rows[rowIndex][columnIndex]}</Cell>);
	}

	return (
		<HotkeysProvider>
			<Table2 numRows={100}>
				<Column name="First Name" cellRenderer={cellRenderer} />
				<Column name="Last Initial" cellRenderer={cellRenderer} />
				<Column name="Age" cellRenderer={cellRenderer} />
				<Column name="Job Title" cellRenderer={cellRenderer} />
				<Column name="Salary" cellRenderer={cellRenderer} />
				<Column name="Tenure" cellRenderer={cellRenderer} />
			</Table2>
		</HotkeysProvider>
	);
};

export default TableExample;