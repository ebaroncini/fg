export class Service {
    public id: string;
    public title: string;
    public image: string;
    public images: string[];
    public largeDescription: string;
    public details: string[];

    constructor(id: string,
        title: string,
        image: string,
        images: string[],
        largeDescription: string,
        details: string[]
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.images = images;
        this.largeDescription = largeDescription;
        this.details = details;
    }
}
