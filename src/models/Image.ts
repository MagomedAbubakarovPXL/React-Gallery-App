export class Image {
    location: string;
    alt: string;
    color: string;
    title: string;
    description: string;

    constructor(location: string, alt: string, color: string, title: string, description: string) {
        this.location = location;
        this.alt = alt;
        this.color = color;
        this.title = title;
        this.description = description;
    }
}