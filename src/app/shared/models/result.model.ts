import { SubjectPartClient } from './index';

export class Result {
    id: number;
    userId: number;
    date: Date = new Date();
    grade: number;
    subjectPartId: number;
    subjectPart: SubjectPartClient = new SubjectPartClient();
    year: number;
    block: number;

    public constructor() {
        this.date = new Date();
    }
}
