const ul = document.getElementById("ul");



const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 let titles = fetch(API_KEY)
    .then(response => response.json())
    .then(data =>data.title )
    .catch(error => console.log(error))

console.log(titles)