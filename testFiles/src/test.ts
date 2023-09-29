import { Entry } from "./classes/entry.js";

const today = new Date();
let dateString = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

const message = document.createElement('h1');

message.innerText = "Hog Freakin' Wild!"

document.querySelector("header")!.appendChild(message);

const noteDisplay = document.querySelector("ul")!;
let noteCount = 0;

const titleInput = document.querySelector("#titleInput")! as HTMLInputElement;
const contentArea = document.querySelector("#contentArea")! as HTMLTextAreaElement;
const form = document.querySelector("form")!;
const deleteAll = document.querySelector("#deleteAll")! as HTMLButtonElement;
/* const submitButton = document.querySelector("#submitButton")! as HTMLInputElement; */


function createEntry(entryTitle: string, entryContent: string, entryDate: string = dateString): Entry{
    
    /* let dateString = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`; */
    let newEntry = new Entry(entryTitle, entryContent, entryDate);
    localStorage.setItem(`${newEntry.title}`,`${newEntry.format()}`);
    noteCount ++;
    return newEntry;  
}


function displayEntry(newEntry: Entry): void{
    let item = document.createElement("li");
    let itemTitle = document.createElement("h4");
    itemTitle.innerText = `${newEntry.title}:`;
    itemTitle.style.display = "inline";
    itemTitle.style.marginRight = "1rem";

    let itemDate = document.createElement("h4")
    itemDate.innerText = `${newEntry.date}`;
    itemDate.style.display = "inline";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.style.display = "inline";
    deleteBtn.style.marginLeft = "4rem";
    /* deleteBtn.addEventListener("click", () =>{
        document.removeChild(item);
    }) */

    let itemContent = document.createElement("p")
    itemContent.innerText = `${newEntry.content}`;


    /* item.innerHTML = `<p>${newEntry.title}:          ${newEntry.date}\n\n     ${newEntry.content}</p>`; */
    item.appendChild(itemTitle)
    item.appendChild(itemDate)
    item.appendChild(deleteBtn);
    item.appendChild(itemContent)
    deleteBtn.addEventListener("click", () =>{

        localStorage.removeItem(`${newEntry.title}`);
        noteDisplay.removeChild(item);
    })
    
    /* item.innerText = newEntry.format(); */
    noteDisplay.appendChild(item);
}


function loadNotes(): void{
    for (var i=0; i < localStorage.length; i++){
       let loadedNote = localStorage.getItem(localStorage.key(i) as string)as string;
       let noteList = loadedNote.split("|")
       let newEntry = createEntry(noteList[0],noteList[1],noteList[2]);
       displayEntry(newEntry);
    }

}


form.addEventListener("submit", (e:Event) => {
    e.preventDefault();

    let latestEntry = createEntry(titleInput.value,contentArea.value);
    displayEntry(latestEntry);
    console.log(localStorage);
    console.log(latestEntry.format());
})



deleteAll.addEventListener("click", ()=>{
    localStorage.clear();
    console.log(localStorage);
    noteDisplay.innerHTML = "";
    }
    
)


console.log(localStorage);
loadNotes();
/* Narrator:	According to all known laws of aviation, there is no way that a bee shonoteDisplayd be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. */