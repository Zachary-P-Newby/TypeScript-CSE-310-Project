"use strict";
var anchor = document.querySelector("a");
console.log(anchor);
var report = document.querySelector(".report");
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var child = document.createElement("p");
    child.innerHTML = "".concat(type.value, ": To/From ").concat(tofrom.value, " for ").concat(amount.valueAsNumber, " - ").concat(details.value);
    report.appendChild(child);
    console.log(child);
});
