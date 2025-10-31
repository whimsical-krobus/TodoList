import "./style.css";

/*================================================================================== Main Title: ==================================================================================*/

// Create reference to html-element app:
const app = document.getElementById("app");

// Add a title/heading to app:
const title = document.createElement("h1");
const text = document.createTextNode("Todo List:");

// Append text to title and title to app:
title.appendChild(text);
app.appendChild(title);

/*================================================================================== To Be Done List: ==================================================================================*/

// Add a div to wrap around To Be Done list:
const todoWrapper = document.createElement("div");
app.appendChild(todoWrapper);

// Add a h2 heading to todos list:
const todosHeading = document.createElement("h2");
const headingTodo = document.createTextNode("To Be Done:");

todosHeading.appendChild(headingTodo);
todoWrapper.appendChild(todosHeading);

// Create a list of todos:
const todos = [
    "Boka tvättid", 
    "Släng sopor", 
    "Töm diskmaskin", 
    "Skriv inköpslista", 
    "Handla", 
    "Byt lakan"
];

/*================================================================================== Checkbox Function: ==================================================================================*/

// Add a ul list and append it to app:
const toBeDoneList = document.createElement("ul");
todoWrapper.appendChild(toBeDoneList);

// Add function to handle checkbox:
function removeItem(event){
    if (event.target.checked) {
        event.target.parentElement.remove();
    }
}

// Add todos contents (todo) as list items:
todos.forEach(todo => {
    const item = document.createElement("li");

    //Add checkbox to item:
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", removeItem);

    // Add todo text:
    const itemText = document.createElement("span");
    itemText.textContent = todo;

    // Append everything to parent-elements:
    toBeDoneList.appendChild(item);
    item.appendChild(checkbox);
    item.appendChild(itemText);
}); 

/*================================================================================== Done List: ==================================================================================*/

// Add a div to wrap around Done list:
const doneWrapper = document.createElement("div");
app.appendChild(doneWrapper);

// Add a h2 heading to done list:
const doneHeading = document.createElement("h2");
const headingDone = document.createTextNode("Done:");

doneHeading.appendChild(headingDone);
doneWrapper.appendChild(doneHeading);

// Add new empty list to move items to when they are marked as done:
const doneList = document.createElement("ul");
doneWrapper.appendChild(doneList);

console.log(doneWrapper);
//const done = ["Dammsug", "Skura badrum"];
//doneList.appendChild(done);

// Add a function to move items that are marked as done to done list:

/*================================================================================== Console Log: ==================================================================================*/

// Print out todos in console:
 console.log(todoWrapper);