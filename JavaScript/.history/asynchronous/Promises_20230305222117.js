const ul = document.getElementById("ul");

const titles = [];

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>titles.push(data.title) )
    .catch(error => console.log(error))

titles.map