const ul = document.getElementById("ul");

const titles = [];

const API_KEY = 'https://jsonplsaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>data.map(e=>data.push(e.title)) )
    .catch(error => console.log(error))

console.log(titles)
