import { ServiceDetailGroup } from "./service-detail-group.model";

export class Service {
    public id: string;
    public title: string;
    public image: string;
    public images: string[];
    public largeDescription: string;
    public detailGroups: ServiceDetailGroup[];

    constructor(id: string,
        title: string,
        image: string,
        images: string[],
        largeDescription: string,
        detailGroups: ServiceDetailGroup[]
    ) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.images = images;
        this.largeDescription = largeDescription;
        this.detailGroups = detailGroups;
    }

}
