import "./style.css";

// Add class for objects and a constructor named todo to make todos list of objects:

class Todo {
    constructor(todo){
        this.todo = todo;
    }
}

const app = document.getElementById("app");

// Add new todo for each list title:
//const todo1 = new Todo("Städa");

// Use push() Method to add objects to list:

/*
const todo = [
    "Boka tvättid", 
    "Släng sopor", 
    "Töm diskmaskin", 
    "Skriv inköpslista", 
    "Handla", 
    "Byt lakan"
];
*/
// Display list on screen, create a div using DOM
//const list = document.querySelector("#list");

// loop through each todo/length of list? Use toString() Method!

const list = [];

list.forEach((todo) => {
    console.log(div);

    const div = document.createElement("div");
    const title = document.createElement("h2");
    const isDone = document.createElement("input");
    const task = document.createElement("input");

    div.className = "wrapper";
    title.innerHTML = wrapper.title;
    isDone.type = "checkbox";
    isDone.checked = wrapper.isDone;
    isDone.disabled = true;
    task.type = "";


    div.appendChild(title);
    div.appendChild(isDone);
    div.appendChild(task);
    app.appendChild(div);
});



//list.append(todo);
//document.append("todos");

/*
// addEventListener

 // innerHTML = "";

function addToList(innerHTML) {
    // append li to ul

    console.log(li);
}
    */

//const array = [];
