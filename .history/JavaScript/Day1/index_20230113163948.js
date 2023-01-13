'use strict'
const addTodo = document.querySelector(".btn")


function todo(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    
    const todoList = document.querySelector("#todoList");

    const li = document.createElement("li");
    li.innerHTML = todo;
    todoList.appendChild(li)
}

addTodo.addEventListener("click", todo)