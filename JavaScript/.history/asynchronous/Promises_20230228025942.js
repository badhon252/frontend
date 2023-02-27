const API_KEY = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(API_KEY)
    .then(response => response.json())
    .then(json => console.log(json.title))
