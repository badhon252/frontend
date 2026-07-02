const data = document.getElementsByTagName("ul");
const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
fetch(API_KEY)
    .then(response => response.json())
    .then(json => json.map(e=>console.log(e.title)))
    


