// Closure
//! Functions along with it's lexical scope formed a closure
//! Functions along with reference of the outer environment formed a closure
//? OR
//! Closure is a function along with it's lexical scope
//! Closure is a function along with reference of the outer environment

//! Closure is a function along with it's lexical scope and reference of the outer environment
//? it will print 1-5 in every Number*Seconds
//? if, have to print 3, it will take time 3 seconds for printing 3 and so on...

// (function(){
//     let time = 1;
//     for(let i = 1; i<=5; i++){
//         time += i;
//         setTimeout(function(){
//             console.log(i)
//         },time * 1000)
//     }
// })();

//? With the 'var' i is a global scoped variable, and it will print 6,6,6,6,6, that's why i use a function to create a new scope

(function(){
    let time = 1;
    for(var i = 1; i<=5; i++){
        (function(a){
            time += a;
            setTimeout(function(){
                console.log(a)
            },time * 1000)
        })(i)
    }
})();


function setup() {
  // Write your code here.
    let images = document.getElementsByClassName("image");
    for(let i = 0; i<images.length; i++){
        images[i].addEventListener("click",function(e){
            if(e.target.className === "remove"){
                this.remove();
            }
        })
    }

    
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);