import { Work } from './work.model';

export class WorkList {
    public title: string;
    public subtitle: string;
    public details: string[];
    public works: Work[];

    constructor(
        title: string,
        subtitle: string,
        details: string[],
        works: Work[]
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.details = details;
        this.works = works;
    }
}
