'use strict'
const addTodo = document.querySelector(".btn")
const todos = []

function todo(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    console.log(todo);
    todos.push(todo)
    const todoList = document.querySelector("#todoList");

    const li = document.createElement("li");
}

addTodo.addEventListener("click", todo)