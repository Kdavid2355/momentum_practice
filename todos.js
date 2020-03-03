const todos = document.querySelector(".todos");
const input_todos = todos.querySelector("input");
const list = document.querySelector(".todos_list");


const TODO_LS = "todo";

function deleteTodo(event){
    console.log("help");
}


function listTodo(todo){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    
    delbtn.innerText = "X";
    delbtn.addEventListener("click", deleteTodo);

    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(span);

    list.appendChild("li;")
    localStorage.setItem(TODO_LS, todo);
}


function handleSubmit(event){
  
    event.preventDefault();
    const todo = input_todos.value;
    localStorage.setItem(TODO_LS, todo);
    listTodo(todo);
    
}


function askTodo(){
    todos.addEventListener("submit", handleSubmit);
}



function saveTodos(){
    if(localStorage.getItem(TODO_LS) === null ){
        askTodo();
    } else {
        
    }
}




function init() {
    saveTodos();

}


init();