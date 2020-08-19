export class Contact {
    public title: string;
    public description: string;
    public phone: string;
    public email: string;
    public social: any[];

    constructor(phone: string,
        email: string,
        social: any[]
    ) {
        this.phone = phone;
        this.email = email;
        this.social = social;
    }
}
