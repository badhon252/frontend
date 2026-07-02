const ul = document.getElementById("ul");

const API_KEY = 'https://jsonplaceholder.typicode.com/todos/'

//? 1. Create a function that fetches data from the API and returns it as a promise.
const data = () =>{
    ul.style.display = "block"
    fetch(API_KEY)
    .then(response => response.json())
    .then(data =>data.map(e=>`<li>${e.id}. title: ${e.title}</li>`))
    .then(data =>ul.innerHTML = data)
    .catch(error => console.log(error))
}
document.getElementById("btn").addEventListener("click", data)

//? Default value of ul before the fetched data
ul.innerHTML = "Fetch data to show something!"

//? 2. Create a function that will collaps the list and another one that will expand it.
//? by display none property we can hide the data.
document.getElementById("collaps").addEventListener("click",()=> ul.style.display = "none")
document.getElementById("collaps").addEventListener("click",()=> ul.style.display = "block")

// document.getElementById("expand").addEventListener("click",function expand(){
//     try{
//         //? 
//         ul.style.display = "block"
//         // ul.innerHTML = data()
//     }catch{
//         console.log("error")
//     }
// })
