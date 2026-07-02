(function(){
    let time = 1;
    for(let i = 1; i<=5; i++){
        time += i;
        setTimeout(function(){
            console.log(i)
        },time * 1000)
    }
})();
