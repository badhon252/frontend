/*  console.log('Starting app');
function cb(){
    console.log('Inside of callback');
    finish()
}
function finish(){
    console.log('Finishing up');
}
cb(); */

//  Promises

const meeting = true;

const promise = new Promise((resolve, reject)=>{
    if(!meeting){
        const meeting = {
            name:"Tech-Talks",
            location: "Zoom",
            time: "10.00am"
        }
    }
})