import "./style.css";

// Create reference to html-element app:
const app = document.getElementById("app");

// Add a title/heading to app:
const title = document.createElement("h1");
const text = document.createTextNode("Todo List:");

// Append text to title and title to app:
title.appendChild(text);
app.appendChild(title);

// Create a list of todos:
const todo = [
    "Boka tvättid", 
    "Släng sopor", 
    "Töm diskmaskin", 
    "Skriv inköpslista", 
    "Handla", 
    "Byt lakan"
];


// Add a ul list and append it to app:
const list = document.createElement("ul");
app.appendChild(list);

// Add function to handle checkbox:
function removeItem(event){
    if (event.target.checked) {
        event.target.parentElement.remove();
    }
}

// Add todo contents (todos) as list items:
todo.forEach(todos => {
    const item = document.createElement("li");

    //Add checkbox to item:
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", removeItem);

    // Add todo text:
    const itemText = document.createElement("span");
    itemText.textContent = todos;

    // Append everything to parent-elements:
    list.appendChild(item);
    item.appendChild(checkbox);
    item.appendChild(itemText);
}); 

// Print out todos in console:
// console.log(todo);