const ul = document.getElementById("ul");



const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 let titles = fetch(API_KEY)
    titles.then(response => response.json())
    titles.then(data => data )
    titles.catch(error => console.log(error))

console.log(titles)