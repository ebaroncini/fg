export class Work {
    public id: string;
    public title: string;
    public name: string;
    public image: string;
    public images: string[];
    public shortDescription: string;
    public largeDescription: string;
    public details: string[];

    constructor(id: string,
        title: string,
        name: string,
        image: string,
        images: string[],
        shortDescription: string,
        largeDescription: string,
        details: string[]
    ) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.image = image;
        this.images = images;
        this.shortDescription = shortDescription;
        this.largeDescription = largeDescription;
        this.details = details;
    }
}
