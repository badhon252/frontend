'use strict'
const addTodo = document.querySelector(".btn")

addTodo.addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicked");
    const todo = document.querySelector("#todoInput").value
    console.log(todo);
})