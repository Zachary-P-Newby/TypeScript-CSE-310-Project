var Entry = /** @class */ (function () {
    /* readonly title: string = "";
    readonly content: string;
    readonly date: Date = new Date; */
    function Entry(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
    }
    Entry.prototype.format = function () {
        return "".concat(this.date, " - ").concat(this.title, ":\n ").concat(this.content);
    };
    return Entry;
}());
export { Entry };
