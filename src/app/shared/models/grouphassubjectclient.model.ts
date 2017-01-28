import { SubjectClient, User } from './index';

export class GroupHasSubjectClient {
    id: number;
    group: GroupClient = new GroupClient();
    subject: SubjectClient = new SubjectClient();
    teacher: User = new User();
    semester: number;
    block: number;
    examDate: Date = new Date();

    public constructor() {
        this.examDate = new Date();
    }
}

export class GroupClient {
    id: number;
}
