const ul = document.getElementById("ul");
const li = document.createElement("li");
ul.appendChild(li)
let titles = [];


const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>titles.push(data.map(e=>`id: ${e.id} title: ${e.title}`)))
    .catch(error => console.log(error))

li.innerText = titles.map(e=>e)
    
li.className = "list"