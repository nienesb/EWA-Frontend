export class User {
	id: number;
	email: string;
	group: Group = new Group;
	studentNumber: number;
	userRole: UserRole = new UserRole();
	firstName: string;
	lastName: string;
}

export class UserRole {
	id: number;
	name: string;
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
	block: number;
}

export class Subject {
	id: number;
	name: string;
	points: number;
	semester: number;
	block: number;
}
