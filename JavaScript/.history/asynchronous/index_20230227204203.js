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
        const meetingDetails = {
            name:"Tech-Talks",
            location: "Zoom",
            time: "10.00am"
        }
        resolve(meetingDetails);
    }else{
       throw reject("Meeting has already been scheduled!")
    }
})

promise
    .then(res=>console.log(res))
    .catch(err=>console.log(err))