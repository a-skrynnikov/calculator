"use strict"

const entryField = document.querySelector(".entryField");
const buttons = document.querySelectorAll(".introduced");
const deletion = document.querySelector(".deletion");
const conclusion = document.querySelector(".conclusion");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        entryField.innerText += buttons[i].innerText;
    });
}

deletion.addEventListener('click', function () {
    entryField.innerText = "";
});

conclusion.addEventListener('click', function () {
    entryField.innerText = eval(entryField.innerText);
});

document.addEventListener("keydown", function (Event) {
    if (Event.key !== "=" && Event.key !=="Backspace") {
        entryField.innerText += Event.key;
    } else if(Event.key === "=") {
        entryField.innerText = eval(entryField.innerText);
    };
});

document.addEventListener("keydown", function (Event) {
    if (Event.key == "Backspace") {
        let str = entryField.innerText;
       entryField.innerText = str.substring(0, str.length - 1);
    }
    });
