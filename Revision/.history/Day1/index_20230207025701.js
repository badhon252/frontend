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

// (function(){
//     let time = 1;
//     for(var i = 1; i<=5; i++){
//         (function(a){
//             time += a;
//             setTimeout(function(){
//                 console.log(a)
//             },time * 1000)
//         })(i)
//     }
// })();

/* 
//? assesment
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
*/
/* 
function createCheckDigit(membershipId) {
  // Write the code that goes here.
    let sum = 0;
    for(let i = 0; i<membershipId.length; i++){
        sum += Number(membershipId[i]);
    }
    if(sum > 9){
        return sum % 10;
    }
    
  return 0;
}

console.log(createCheckDigit("55555"));
 */
/* 
//? 1. Create a function that takes a string and returns a string in which each character is repeated once.
//? Examples
//? doubleChar("String") ➞ "SSttrriinngg"
//? doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
//? doubleChar("1234!_ ") ➞ "11223344!!__  "

function doubleChar(str) {
    // Your code here
        let newStr = "";
        for(let i = 0; i<str.length; i++){
            newStr += str[i] + str[i];
        }
        return newStr;
    }

console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));
console.log(doubleChar("%%^&*("));
 */

// x=1;
// console.log(x);
// var x;


(function(){
var time = 1;
    for(let i = 0; i<5; i++){
        (function(){
            time += i;
            setTimeout(function(){
                console.log(i)
            },time * 1000)
        })()
    }
})()