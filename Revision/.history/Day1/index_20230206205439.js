(function x(){
    for(let i =1; i<=5; i=i+2){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
})();
