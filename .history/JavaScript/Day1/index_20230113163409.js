'use strict'
const addTodo = document.querySelector(".btn")
const todos = []
function todo(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    console.log(todo);
    
    const todoList = document.querySelector("#todoList");

}

addTodo.addEventListener("click", todo)