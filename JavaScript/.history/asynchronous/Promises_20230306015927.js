const ul = document.getElementById("ul");
const li = document.createElement("li");
ul.appendChild(li)

let titles = [];
const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'

const data = () =>{
    ul.style.display = "block"
    fetch(API_KEY)
    .then(response => response.json())
    .then(data =>ul.innerHTML = data.map(e=>`<li>id: ${e.id}, title: ${e.title}</li>`))
    .catch(error => console.log(error))
}

document.getElementById("btn").addEventListener("click", data)

ul.innerHTML = "There is nothing to show!"

document.getElementById("collaps").addEventListener("click",function collaps(e){
    try{
        ul.style.display = "none"
    }catch{
        console.log("error")
    }
})
document.getElementById("expand").addEventListener("click",function expand(e){
    try{
        ul.style.display = "block"
        ul.innerHTML = data()
    }catch{
        console.log("error")
    }
})

