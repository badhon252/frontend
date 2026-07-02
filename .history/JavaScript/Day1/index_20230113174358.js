function debounce(fn, delay) {
let timer = null;
    return function(){
        if(timer) clearInterval(timer)
        timer = setTimeout(fn, delay);
    }
}
const todo = document.querySelector("#todoInput").value
const addTodo = document.querySelector(".btn")
const todoList = document.querySelector("#todoList");

function todo(){
    const li = document.createElement("li");
    li.innerHTML = todo;

    (todo === '') ? alert("Please enter a todo") : todoList.appendChild(li)
    
}

addTodo.addEventListener("click", debounce(todo, 200))


//Checkbox / text stroke
const li = document.querySelector("li");

function checked(){
    li.classList.toggle("checked");
}

li.addEventListener("click", checked)