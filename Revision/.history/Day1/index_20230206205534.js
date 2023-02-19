(function x(){
    for(let i =1; i<=50; i+=2){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
})();
