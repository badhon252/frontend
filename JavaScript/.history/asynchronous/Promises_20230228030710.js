const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
fetch(API_KEY)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(err=>console.log(err))