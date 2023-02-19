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

(function(){
    let time = 1;
    for(let i = 1; i<=5; i++){
        time += i;
        setTimeout(function(){
            console.log(i)
        },time * 1000)
    }
})();

