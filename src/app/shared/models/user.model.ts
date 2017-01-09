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
	subjects: Array<GroupHasSubject> = new Array<GroupHasSubject>();
}

export class GroupHasSubject {
	id: number;
	subject: Subject = new Subject;
}

export class Subject {
	id: number;
	name: string;
	points: number;
	semester: number;
	block: number;
}