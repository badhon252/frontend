const ul = document.getElementById("ul");
const li = document.createElement("li");
const button = document.createElement("button");
ul.appendChild(li)
<body>
    
</body>.appendChild(li)
let titles = [];
const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'

fetch(API_KEY)
    .then(response => response.json())
    .then(data =>ul.innerHTML = data.map(e=>`<li>id: ${e.id}, title: ${e.title}</li>`))
    .catch(error => console.log(error))



function myFunction() {
  document.getElementById("myH1").setAttribute("class", "democlass"); 
}