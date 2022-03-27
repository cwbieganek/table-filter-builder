import type { ComparableType } from "./Logic/LogicalExpression";

export type FakeRecord = {
	firstName: string;
	lastInitial: string;
	age: number;
	jobTitle: string;
	salary: number;
	tenure: number;
};

const FIRST_NAMES = [
	"Chris",
	"Jane",
	"John",
	"Jodi",
	"Virginia"
];

const LAST_INITIALS = [
	"A",
	"B",
	"C",
	"D",
	"E"
];

const JOB_TITLES = [
	"QA Analyst",
	"Software Developer",
	"Software Architect",
	"DevOps Engineer"
];

function getFakeName(): string {
	let randomIndex = getRandomInt(0, 4);

	return FIRST_NAMES[randomIndex];
}

function getFakeLastInitial(): string {
	let randomIndex = getRandomInt(0, 4);

	return LAST_INITIALS[randomIndex];
}

function getFakeJobTitle(): string {
	let randomIndex = getRandomInt(0, 3);

	return JOB_TITLES[randomIndex];
}

function getFakeAge(): number {
	return getRandomInt(18, 100);
}

function getFakeSalary(): number {
	return getRandomInt(50, 200) * 1000;
}

function getFakeTenure(): number {
	return getRandomInt(1, 30);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getFakeRecord(): FakeRecord {
	let fakeRecord: FakeRecord = {
		firstName: getFakeName(),
		lastInitial: getFakeLastInitial(),
		age: getFakeAge(),
		jobTitle: getFakeJobTitle(),
		salary: getFakeSalary(),
		tenure: getFakeTenure()
	}

	return fakeRecord;
}

/**
 * Resolves to an array of 100 FakeRecord objects. Adds an artificial timeout to simulate
 * requesting the data from an API.
 */
export function getFakeData(): Promise<FakeRecord[]> {
	return new Promise((resolve, reject) => {
		let fakeRecords: FakeRecord[] = [];

		for (let i = 1; i <= 100; i++) {
			// Get fake record and add it to the list
			let fakeRecord = getFakeRecord();
			fakeRecords.push(fakeRecord);
		}

		// Wait half a second before resolving
		setTimeout(() => {
			resolve(fakeRecords);
		}, 200);
	});
}

/**
 * Resolves to an array of ComparableType arrays. This is compatible with the Blueprint JS CellRenderer.
 */
export function getFake2dArray(): Promise<ComparableType[][]> {
	return new Promise((resolve, reject) => {
		let fakeRows: ComparableType[][] = [];

		for (let i = 1; i <= 100; i++) {
			let fakeRecord = getFakeRecord();
			fakeRows.push([
				fakeRecord.firstName,
				fakeRecord.lastInitial,
				fakeRecord.age,
				fakeRecord.jobTitle,
				fakeRecord.salary,
				fakeRecord.tenure
			]);
		}

		// Wait half a second before resolving
		setTimeout(() => {
			resolve(fakeRows);
		}, 2000);
	});
}