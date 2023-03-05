const ul = document.getElementById("ul");
const style ={
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold'
}


let titles = [];

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'
 fetch(API_KEY)
    .then(response => response.json())
    .then(data =>ul.innerHTML = data.map(e=>`<li>id: ${e.id}, title: ${e.title}</li>`))
    .catch(error => console.log(error))

document.getElementsByTagName("li")
    .classLists.add("style")