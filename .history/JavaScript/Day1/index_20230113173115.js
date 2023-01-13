function debounce(fn, delay) {
let timer = null;
return function(){
    setTimeout(fn, delay);
    clearInterval(timer)
    
}
}
const addTodo = document.querySelector(".btn")


function todo(){
    const todo = document.querySelector("#todoInput").value
    
    const todoList = document.querySelector("#todoList");

    const li = document.createElement("li");
    li.innerHTML = todo;

    (todo === '') ? alert("Please enter a todo") : todoList.appendChild(li)
    
}

addTodo.addEventListener("click", debounce(todo, 300))