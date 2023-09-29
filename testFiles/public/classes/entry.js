export class Entry {
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
        /* console.log(content) */
    }
    format() {
        return `${this.title}|${this.content}|${this.date}`;
    }
}
