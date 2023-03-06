const data = document.getElementById("ul");

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
fetch(API_KEY)
    .then(response => response.json())
    .then(json => json.map(e=>{
      data.innerHTML = `<li>${e.title}</li>`
    }
    ))
    

