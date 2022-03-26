import { HotkeysProvider } from "@blueprintjs/core";
import { Cell, CellRenderer, Column, ColumnLoadingOption, Table2 } from "@blueprintjs/table";
import type { ICellProps } from "@blueprintjs/table";
import { FakeRecord, getFake2dArray } from "@/modules/Fake";
import { ComparableType } from "@/modules/Logic/LogicalExpression";
import React, { ReactElement } from "react";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";

const TableExample: React.FC<{}> = () => {
	const [fakeRows, setFakeRows] = useState<ComparableType[][]>([]);
	const [loadingData, setLoadingData] = useState<boolean>(true);

	// Get fake data asynchronously, but only once
	useEffect(() => {
		getFake2dArray().then((fakeRows) => {
			console.log("Got fake data:");
			console.log(fakeRows);
			setFakeRows(fakeRows);
			setLoadingData(false);
		});
	}, []);

	function getCellData(fakeRows: ComparableType[][], rowIndex: number, columnIndex: number): ComparableType {
		return fakeRows[rowIndex][columnIndex];
	}
	
	function cellRenderer (rowIndex: number, columnIndex: number): ReactElement<ICellProps> {
		return (<Cell>{getCellData(fakeRows, rowIndex, columnIndex)}</Cell>);
	}

	function renderLoading() {
		return(
			<h2>Loading data...</h2>
		);
	}

	function renderTable() {
		return(
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
	}

	return(loadingData ? renderLoading() : renderTable());
};

export default TableExample;