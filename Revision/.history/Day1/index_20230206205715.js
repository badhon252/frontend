(function x(){
    let i = 1;
    for(i; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
})();
