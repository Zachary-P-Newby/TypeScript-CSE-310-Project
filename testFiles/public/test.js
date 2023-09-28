"use strict";
//import { Entry } from "./classes/entry.js";
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
var today = new Date();
var message = document.createElement('h1');
message.innerText = "Hog Freakin' Wild!";
document.querySelector("header").appendChild(message);
var ul = document.querySelector("ul");
var titleInput = document.querySelector("#titleInput");
var contentArea = document.querySelector("#contentArea");
var form = document.querySelector("form");
/* const submitButton = document.querySelector("#submitButton")! as HTMLInputElement; */
function createEntry(entryTitle, entryContent) {
    var dateString = "".concat(today.getMonth() + 1, "/").concat(today.getDate(), "/").concat(today.getFullYear());
    var newEntry = new Entry(entryTitle, entryContent, dateString);
    return newEntry;
}
function displayEntry(newEntry) {
    var item = document.createElement("li");
    var itemTitle = document.createElement("h4");
    itemTitle.innerText = "".concat(newEntry.title, ":");
    itemTitle.style.display = "inline";
    itemTitle.style.marginRight = "1rem";
    var itemDate = document.createElement("h4");
    itemDate.innerText = "".concat(newEntry.date);
    itemDate.style.display = "inline";
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.style.display = "inline";
    deleteBtn.style.marginLeft = "4rem";
    /* deleteBtn.addEventListener("click", () =>{
        document.removeChild(item);
    }) */
    var itemContent = document.createElement("p");
    itemContent.innerText = "".concat(newEntry.content);
    /* item.innerHTML = `<p>${newEntry.title}:          ${newEntry.date}\n\n     ${newEntry.content}</p>`; */
    item.appendChild(itemTitle);
    item.appendChild(itemDate);
    item.appendChild(deleteBtn);
    item.appendChild(itemContent);
    deleteBtn.addEventListener("click", function () {
        /* Add pop up window are you sure you want to delete this. */
        ul.removeChild(item);
    });
    /* item.innerText = newEntry.format(); */
    ul.appendChild(item);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var latestEntry = createEntry(titleInput.value, contentArea.value);
    displayEntry(latestEntry);
});
/* Narrator:	According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. */ 
