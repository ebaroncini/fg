import { Work } from './work.model';

export class WorkList {
    public details: string[];
    public works: Work[];

    constructor(
        details: string[],
        works: Work[]
    ) {
        this.details = details;
        this.works = works;
    }
}
