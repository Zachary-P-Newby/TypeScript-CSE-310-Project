import { stickyNote } from "../interfaces/stickyNote";

export class Entry implements stickyNote{
    /* readonly title: string = "";
    readonly content: string;
    readonly date: Date = new Date; */


    constructor(
        readonly title: string,
        readonly content: string,
        readonly date: string){}
    
    format(): String {
        return `${this.date} - ${this.title}:\n ${this.content}`;
    }
    
}