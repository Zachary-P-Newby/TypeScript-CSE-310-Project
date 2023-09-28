import { Entry } from "./classes/entry";

const today = new Date();

const message = document.createElement('h1');

message.innerText = "Hog Freakin' Wild!"

document.querySelector("header")!.appendChild(message);


const ul = document.querySelector("ul")!;

const titleInput = document.querySelector("#titleInput")! as HTMLInputElement;
const contentArea = document.querySelector("#contentArea")! as HTMLTextAreaElement;
const form = document.querySelector("form")!;
/* const submitButton = document.querySelector("#submitButton")! as HTMLInputElement; */



function createEntry(entryTitle: string, entryContent: string): Entry{
    
    let dateString = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
    let newEntry = new Entry(entryTitle, entryContent, dateString);


    console.log(newEntry.format())
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

        /* Add pop up window are you sure you want to delete this. */
        ul.removeChild(item);
    })
    
    /* item.innerText = newEntry.format(); */
    ul.appendChild(item);
}



form.addEventListener("submit", (e:Event) => {
    e.preventDefault();
    
    let latestEntry = createEntry(titleInput.value,contentArea.value)

    displayEntry(latestEntry);

})


/* Narrator:	According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. */