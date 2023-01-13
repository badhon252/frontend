function debounce(fn, delay) {
let timer = null;
    return function(){
        if(timer) clearInterval(timer)
        timer = setTimeout(fn, delay);
    }
}
//! Add Todo's
const addTodo = document.querySelector(".btn")
const todoList = document.querySelector("#todoList");

function todo(){
    const todo = document.querySelector("#todoInput").value

    const li = document.createElement("li");
    li.innerHTML = todo;
    const cross = document.createElement("span");
    cross.innerHTML= "❌" ;
    li.appendChild(cross);

    (todo === '') ? alert("Please enter a todo") : todoList.appendChild(li)
    li.setAttribute("class", "listItem")
    
}

addTodo.addEventListener("click", debounce(todo, 200))



//! Clear all To-do's
const clearTodo = document.querySelector(".clear");
clearTodo.style.color = "red"

clearTodo.addEventListener('click', function clear(params) {
    todoList.innerHTML = null
})

//! Delete To-do's
// const deleteTodo = document.querySelector(".delete");
// deleteTodo.style.color = "red"

// deleteTodo.addEventListener('click', function deleteItem(params) {
//     const li = document.querySelectorAll("li");
//     li.forEach(element => {
//         if(element.style.textDecoration === "line-through"){
//             element.remove()
//         }
//     });
// })

//? Filter To-do's
// const filterTodo = document.querySelector(".filter");
// filterTodo.addEventListener('click', function filter(params) {
//     const li = document.querySelectorAll("li");
//     li.forEach(element => {
//         if(element.style.textDecoration === "line-through"){
//             element.style.display = "none"
//         }
//     });
// })


//? Checkbox / text stroke
// const li = document.querySelector("li");

// function checked(e){
//     console.log(e.target)
//     if(e.target.style.textDecoration === "line-through"){
//         e.target.style.textDecoration = "none"
//     }else{
//         e.target.style.textDecoration = "line-through"
//     }
// }

// li.addEventListener("click", checked)
