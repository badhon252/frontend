const ul = document.getElementById("ul");

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
const data =  fetch(API_KEY)
    .then(response => response.json())
    .then(json => json)
    .catch(error => error)
    
    console.log(data)


