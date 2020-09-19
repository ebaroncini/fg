export class Philosophy {
    public id: string;
    public title: string;
    public images: string[];
    public largeDescription: string;
    public details: string[];

    constructor(id: string,
        title: string,
        images: string[],
        largeDescription: string,
        details: string[]
    ) {
        this.id = id;
        this.title = title;
        this.images = images;
        this.largeDescription = largeDescription;
        this.details = details;
    }
}
