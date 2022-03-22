import { HotkeysProvider } from "@blueprintjs/core";
import { Column, Table2 } from "@blueprintjs/table";
import { FakeRecord, getFakeData } from "../../modules/Fake";
import React from "react";
import { useState, useEffect } from "react";

const TableExample: React.FC<{}> = () => {
	const [fakeRecords, setFakeRecords] = useState<FakeRecord[]>([]);

	// Get fake data asynchronously, but only once
	useEffect(() => {
		getFakeData().then((fakeData) => {
			console.log("Got fake data:");
			console.log(fakeData);
			setFakeRecords(fakeData);
		});
	}, []);

	return(
		<HotkeysProvider>
				<Table2 numRows={100}>
						<Column />
						<Column />
						<Column />
						<Column />
						<Column />
				</Table2>
		</HotkeysProvider>
	);
};

export default TableExample;