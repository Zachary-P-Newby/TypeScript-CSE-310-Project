export class Note {
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
    }
    format() {
        return `${this.title}|${this.content}|${this.date}`;
    }
}
