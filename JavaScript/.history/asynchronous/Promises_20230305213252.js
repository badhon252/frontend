const ul = document.getElementById("ul");

const data = []

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error))
    
    console.log(data)


