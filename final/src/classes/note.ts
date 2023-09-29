export class Note{

    constructor(
        readonly title: string,
        readonly content: string,
        readonly date: string){}
    
    format(): string{
        return `${this.title}|${this.content}|${this.date}`;
    }
}