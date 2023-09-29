"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
var Entry = /** @class */ (function () {
    function Entry(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
        /* console.log(content) */
    }
    Entry.prototype.format = function () {
        return "".concat(this.title, "|").concat(this.content, "|").concat(this.date);
    };
    return Entry;
}());
exports.Entry = Entry;
