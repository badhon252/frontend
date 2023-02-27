/* console.log('Starting app');


function cb(){
    console.log('Inside of callback');
    finish()
}

function finish(){
    console.log('Finishing up');
    }
    cb() */


// Path: asynchronous/index.js
console.log('Starting app');

setTimeout(function(){
    console.log('Inside of callback');
}, 10)

console.log('Finishing up');