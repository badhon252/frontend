const ul = document.getElementById("ul");

let titles = [];

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/100'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>ul.innerHTML = data.map(e=>`<li>id: ${e.id} title: ${e.title}</li>`))
    .catch(error => console.log(error))

document.getElementsByTagName("li")
    .classLists.add("style")