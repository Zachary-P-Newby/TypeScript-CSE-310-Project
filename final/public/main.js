import { Note } from "./classes/note.js";
/* Set Constants and variables */
const today = new Date();
const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
const dateSpan = document.querySelector("#dateSpan");
const noteDisplay = document.querySelector("ul");
const form = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const contentArea = document.querySelector("#contentArea");
const deleteAll = document.querySelector("#deleteAll");
/* Get and set date */
dateSpan.innerText = `${dateString}`;
/* Funtions */
function createNote(noteTitle, noteContent, noteDate = dateString) {
    let newNote = new Note(noteTitle, noteContent, noteDate);
    localStorage.setItem(`${newNote.title}`, `${newNote.format()}`);
    return newNote;
}
function displayNote(newNote) {
    let listElement = document.createElement("li");
    let elementTitle = document.createElement("h4");
    elementTitle.innerText = newNote.title;
    let subdiv = document.createElement("div");
    let elementContent = document.createElement("p");
    elementContent.innerText = `${newNote.content}`;
    let elementDate = document.createElement("h4");
    elementDate.innerText = newNote.date;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => {
        localStorage.removeItem(`${newNote.title}`);
        noteDisplay.removeChild(listElement);
    });
    listElement.appendChild(subdiv);
    subdiv.appendChild(elementTitle);
    listElement.appendChild(elementContent);
    subdiv.appendChild(elementDate);
    subdiv.appendChild(deleteBtn);
    noteDisplay.appendChild(listElement);
}
function loadNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        let loadedNote = localStorage.getItem(localStorage.key(i));
        let noteList = loadedNote.split("|");
        let newNote = createNote(noteList[0], noteList[1], noteList[2]);
        displayNote(newNote);
    }
}
/* event listeners */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let latestNote = createNote(titleInput.value, contentArea.value);
    displayNote(latestNote);
});
deleteAll.addEventListener("click", () => {
    localStorage.clear();
    noteDisplay.innerHTML = "";
});
/* page load code */
loadNotes();
