const anchor = document.querySelector("a")!;
console.log(anchor)

const report = document.querySelector(".report") as HTMLDivElement;

const form = document.querySelector("form")!;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const child = document.createElement("p") as HTMLParagraphElement;

  child.innerHTML = `${type.value}: To/From ${tofrom.value} for ${amount.valueAsNumber} - ${details.value}`;

  report.appendChild(child);
  console.log(child)
});
