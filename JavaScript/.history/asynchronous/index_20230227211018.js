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


const myPromises = new Promise((resolve, reject)=>{
    if(!meeting){
        const meetingDetails = {
            "name":"Technical Meeting",
            "location": "Zoom",
            "time": "10.00am"
        }
        resolve(meetingDetails);
    }else{
        reject("Meeting has already been scheduled! 😾")
    }
})

const addToCalendar =(meetingDetails)=>{
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        Promise.resolve(calendar);

}

myPromises
    .then(addToCalendar)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

