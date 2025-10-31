import "./style.css";

// Create reference to html-element app
const app = document.getElementById("app");

/*
// Add class for objects and a constructor named todo to make todos list of objects:

class Todo {
    constructor(todo){
        this.todo = todo;
    }
}

// Add new todo for each list title:
const todo1 = new Todo("Städa");
const todo2 = new Todo("Boka tvättid");
const todo3 = new Todo("Släng sopor");
const todo4 = new Todo("Töm diskmaskin");
const todo5 = new Todo("Skriv inköpslista");
const todo6 = new Todo("Handla");
const todo7 = new Todo("Byt lakan");

list.forEach((todo) => {
    console.log(todo);
    //list.innerHTML = todo.toString();
    //return list;

    const div = document.createElement("div");
    const title = document.createElement("h2");
    const isDone = document.createElement("input");
    //const task = document.createElement("input");

    div.className = div; // why does it work with div and not if I name it "wrapper"?
    title.innerHTML = todo.toString();
    isDone.type = "checkbox";
    isDone.checked = div.isDone;
    isDone.disabled = true;
    //task.type = "form";


    div.appendChild(title);
    div.appendChild(isDone);
    //div.appendChild(task);
    app.appendChild(div);
});
*/

// Use push() Method to add objects to list:


const todo = [
    "Boka tvättid", 
    "Släng sopor", 
    "Töm diskmaskin", 
    "Skriv inköpslista", 
    "Handla", 
    "Byt lakan"
];



// loop through each todo/length of list?

const list = document.createElement("ul");

console.log(todo);

//list.append(todo);

/*
// addEventListener

 // innerHTML = "";

function addToList(innerHTML) {
    // append li to ul

    console.log(li);
}
    */