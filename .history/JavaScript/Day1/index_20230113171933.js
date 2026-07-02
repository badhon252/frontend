function debounce(param){
   const t = setTimeout(() => {
        param
    }, 400);
    clearInterval(t)
}

const addTodo = document.querySelector(".btn")


function todo(e){
    e.preventDefault();
    const todo = document.querySelector("#todoInput").value
    
    const todoList = document.querySelector("#todoList");

    const li = document.createElement("li");
    li.innerHTML = todo;

    (todo === '') ? alert("Please enter a todo") : todoList.appendChild(li)
    
}

addTodo.addEventListener("click", todo)