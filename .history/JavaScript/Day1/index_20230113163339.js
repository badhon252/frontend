'use strict'
const addTodo = document.querySelector(".btn")

function todos(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    console.log(todo);
    const todos = []
    const todoList = document.querySelector("#todoList");

}

addTodo.addEventListener("click", todos)