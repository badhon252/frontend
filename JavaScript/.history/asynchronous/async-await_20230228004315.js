
const promises2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise 2 has been resolved!");
    }, 5000)
});
const promises3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise 3 has been resolved!");
    }, 2000)
});

Promise.all([promises2, promises3])
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

Promise.race([ promises2, promises3])
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
