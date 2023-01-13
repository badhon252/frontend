function debounce(fn, delay) {
let timer = null;
    return function(){
        if(timer) clearInterval(timer)
        timer = setTimeout(fn, delay);
    }
}

const addTodo = document.querySelector(".btn")
const todoList = document.querySelector("#todoList");

function todo(){
    const todo = document.querySelector("#todoInput").value

    const li = document.createElement("li");
    li.innerHTML = todo;

    (todo === '') ? alert("Please enter a todo") : todoList.appendChild(li)
    
}

addTodo.addEventListener("click", debounce(todo, 200))


//Checkbox / text stroke
// const li = document.querySelector("li");

// function checked(e){
//     console.log(e.target)
//     todoList.map(element => {
//         console.log(element);
//     });
// }

// li.addEventListener("click", checked)


//? Clear To-do's
const clearTodo = document.querySelector(".clear");
clearTodo.style.color = "red"

clearTodo.addEventListener('click', function clear(params) {
    todoList.innerHTML = null
})