import "./style.css";

// Add class for objects and a constructor named todo to make todos list of objects:

class Todo {
    constructor(todo){
        this.todo = todo;
    }
}

// Add new todo for each list item:
const todo1 = new Todo("Städa");

// Use push() Method to add objects to list:

// Take a user input as the object:

// Create list that takes in todo:
const todos = [
    "Boka tvättid", 
    "Släng sopor", 
    "Töm diskmaskin", 
    "Skriv inköpslista", 
    "Handla", 
    "Byt lakan"
];

// loop through each todo/length of list? Use toString() Method!
todos.forEach((todos) => {
    console.log(todos);
});

// Display list on screen, create a div using DOM
const list = document.querySelector("#list");

list.append(todos);
//document.append("todos");

// ------------------------------------------------------------------------------------

/*
// addEventListener

 // innerHTML = "";

function addToList(innerHTML) {
    // append li to ul

    console.log(li);
}
    */