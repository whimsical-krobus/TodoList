import "./style.css";

const todos = ["Boka tvättid", "Släng sopor", "Töm diskmaskin", "Skriv inköpslista", "Handla", "Byt lakan"];
//const task = new task();
//const ul = document.getElementById(task);
//todos[0] = "Boka tvättid";

// loop through each todo/length of list?
todos.forEach((todos) => {
    console.log(todos);
});

// Add class for objects
    // Add objects named todo to make todos list of objects

class Todo {
    constructor(todo){
        this.todo = todo;
    }
}

// ------------------------------------------------------------------------------------

/* Add div for tasks (elements in todo)
const div = document.createElement("div");

div.className = "todo";
//this.task = new task()
*/
// object listItem
//const tasks {
    
    //this.innerHTML;
//}

/*
// addEventListener

 // innerHTML = "";

function addToList(innerHTML) {
    // append li to ul

    console.log(li);
}
    */