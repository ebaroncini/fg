export class ServiceDetailGroup {
    public title: string;
    public details: string[];

    constructor(title: string,
        details: string[]
    ) {
        this.title = title;
        this.details = details;
    }
}
