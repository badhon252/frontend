'use strict'
const addTodo = document.querySelector(".btn")

addTodo.addEventListener("click", function(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    console.log(todo);
    const todoList =document.querySelector("#todoList")

})