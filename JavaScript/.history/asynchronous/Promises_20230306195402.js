const ul = document.getElementById("ul");

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'

//! 1. Create a function that fetches data from the API and returns it as a promise.
document.getElementById("btn").addEventListener("click", () =>{
    fetch(API_KEY)
    .then(response => response.json())
    .then(data =>data.map(e=>`<li>${e.id}. Title: ${e.title.slice(0,1).toUpperCase() + e.title.slice(1)}.</li>`))
    .then(data =>ul.innerHTML = data)
    .catch(error => console.log(error))
})

//? Default value of ul before the fetched data
ul.innerHTML = "Fetch data to show something!"

//! 2. Create a function that will collaps the list and another one that will expand it.
//? by display none property we can hide the data.
document.getElementById("collaps").addEventListener("click",() => ul.style.display = "none")

//? By using display block, we can show data without recalling to the api's
document.getElementById("expand").addEventListener("click", () => ul.style.display = "block")
