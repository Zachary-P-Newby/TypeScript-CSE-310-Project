export class Entry{
    /* readonly title: string = "";
    readonly content: string;
    readonly date: Date = new Date; */


    constructor(
        readonly title: string,
        readonly content: string,
        readonly date: string){}
    
    format(): string {
        return `${this.title}|${this.content}|${this.date}`;
    }

}