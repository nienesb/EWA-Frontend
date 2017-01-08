export class User {
	id: number;
	email: string;
	group: Group = new Group;
	studentNumber: number;
	isTeacher: boolean = false;
	firstName: string;
	lastName: string;
}

export class Group {
	id: number;
	name: string;
	year: number;
}
