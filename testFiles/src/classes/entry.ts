export class Entry{

    constructor(
        readonly title: string,
        readonly content: string,
        readonly date: string){
            /* console.log(content) */
        }
    
    format(): string {
        return `${this.title}|${this.content}|${this.date}`;
    }

}