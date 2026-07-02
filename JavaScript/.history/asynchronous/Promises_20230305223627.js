const ul = document.getElementById("ul");
const li =function(){
    (`<li>id: ${e.id}, title: ${e.title}</li>`)
} 
let titles = [];

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>ul.innerHTML = data.map(e=>li) )
    .catch(error => console.log(error))
