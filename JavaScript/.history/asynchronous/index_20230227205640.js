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

const meeting = false;


const myPromises = new Promise((res, rej)=>{
debugger;
    if(!meeting){
        const meetingDetails = {
            "name":"Tech-Talks",
            "location": "Zoom",
            "time": "10.00am"
        }
        debugger;
        resolve(meetingDetails);
    }else{
        debugger;
        reject("Meeting has already been scheduled! 😾")
    }
})

myPromises
    .then(res=>console.log(res))
    .catch(err=>console.log(err))