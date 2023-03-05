const ul = document.getElementById("ul");
const li = document.createElement("li");
ul.appendChild(li)

let titles = [];
const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'



document.getElementById("btn").addEventListener("click",function myFunction() {
    fetch(API_KEY)
        .then(response => response.json())
        .then(data =>ul.innerHTML = data.map(e=>`<li>id: ${e.id}, title: ${e.title}</li>`))
        .catch(error => console.log(error))
})

ul.innerHTML = "There is nothing!"

document.getElementById("collaps").addEventListener("click",function expand(e){
    if(!ul){
        ul.innerHTML = "Null"
    }else{
        ul.innerHTML = "Null!"
    }
    return 0;
})

