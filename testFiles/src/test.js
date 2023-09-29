"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entry_js_1 = require("./classes/entry.js");
var today = new Date();
var dateString = "".concat(today.getMonth() + 1, "/").concat(today.getDate(), "/").concat(today.getFullYear());
var message = document.createElement('h1');
message.innerText = "Hog Freakin' Wild!";
document.querySelector("header").appendChild(message);
var noteDisplay = document.querySelector("ul");
var noteCount = 0;
var titleInput = document.querySelector("#titleInput");
var contentArea = document.querySelector("#contentArea");
var form = document.querySelector("form");
var deleteAll = document.querySelector("#deleteAll");
/* const submitButton = document.querySelector("#submitButton")! as HTMLInputElement; */
function createEntry(entryTitle, entryContent, entryDate) {
    if (entryDate === void 0) { entryDate = dateString; }
    /* let dateString = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`; */
    var newEntry = new entry_js_1.Entry(entryTitle, entryContent, entryDate);
    localStorage.setItem("".concat(newEntry.title), "".concat(newEntry.format()));
    noteCount++;
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
        localStorage.removeItem("".concat(newEntry.title));
        noteDisplay.removeChild(item);
    });
    /* item.innerText = newEntry.format(); */
    noteDisplay.appendChild(item);
}
function loadNotes() {
    for (var i = 0; i < localStorage.length; i++) {
        var loadedNote = localStorage.getItem(localStorage.key(i));
        var noteList = loadedNote.split("|");
        var newEntry = createEntry(noteList[0], noteList[1], noteList[2]);
        displayEntry(newEntry);
    }
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var latestEntry = createEntry(titleInput.value, contentArea.value);
    displayEntry(latestEntry);
    console.log(localStorage);
    console.log(latestEntry.format());
});
deleteAll.addEventListener("click", function () {
    localStorage.clear();
    console.log(localStorage);
    noteDisplay.innerHTML = "";
});
console.log(localStorage);
loadNotes();
/* Narrator:	According to all known laws of aviation, there is no way that a bee shonoteDisplayd be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. */ 
