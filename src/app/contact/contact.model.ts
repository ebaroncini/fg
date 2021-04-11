export class Contact {
    public title: string;
    public description: string;
    public image: string;
    public phone: string;
    public email: string;
    public social: any[];

    constructor(title: string,
        description: string,
        image: string,
        phone: string,
        email: string,
        social: any[]
    ) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.phone = phone;
        this.email = email;
        this.social = social;
    }
}
