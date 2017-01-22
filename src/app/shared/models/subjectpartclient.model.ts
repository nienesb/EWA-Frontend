 export class SubjectPartClient {
    id: number;
    name: string;
    points: number;
    parentSubject: SubjectShort = new SubjectShort();
 }

 export class SubjectShort {
     id: number;
 }
