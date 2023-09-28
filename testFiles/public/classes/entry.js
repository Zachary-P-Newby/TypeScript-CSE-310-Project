export class Entry {
    /* readonly title: string = "";
    readonly content: string;
    readonly date: Date = new Date; */
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
    }
    format() {
        return `${this.title}|${this.content}|${this.date}`;
    }
}
