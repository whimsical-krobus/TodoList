import "./style.css";

// Add class for objects and a constructor named todo to make todos list of objects:

class Todo {
    constructor(todo){
        this.todo = todo;
    }
}

const app = document.getElementById("app");

// Add new todo for each list title:
const todo1 = new Todo("Städa");
const todo2 = new Todo("Boka tvättid");
const todo3 = new Todo("Släng sopor");
const todo4 = new Todo("Töm diskmaskin");
const todo5 = new Todo("Skriv inköpslista");
const todo6 = new Todo("Handla");
const todo7 = new Todo("Byt lakan");


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

// loop through each todo/length of list? Use toString() Method!

const list = [todo1, todo2, todo3, todo4, todo5, todo6, todo7];

console.log(list);

list.forEach((todo) => {
    console.log(todo);

    const div = document.createElement("div");
    const title = document.createElement("h2");
    const isDone = document.createElement("input");
    const task = document.createElement("input");

    div.className = div; // varför funkar det med div och inte "wrapper"?
    title.innerHTML = div.title;
    isDone.type = "checkbox";
    isDone.checked = div.isDone;
    isDone.disabled = true;
    task.type = "form";


    div.appendChild(title);
    div.appendChild(isDone);
    div.appendChild(task);
    app.appendChild(div);
});


//list.append(todo);

/*
// addEventListener

 // innerHTML = "";

function addToList(innerHTML) {
    // append li to ul

    console.log(li);
}
    */