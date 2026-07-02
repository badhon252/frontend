const ul = document.getElementById("ul");

let titles = [];

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>data.map(e=>console.log(`id: ${e.id}, title: ${e.title}`)) )
    .catch(error => console.log(error))
