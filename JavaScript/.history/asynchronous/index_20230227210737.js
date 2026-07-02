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
    if(!meeting){
        const meetingDetails = {
            "name":"Tech-Talks",
            "location": "Zoom",
            "time": "10.00am"
        }
        resolve(meetingDetails);
    }else{
        reject("Meeting has already been scheduled! 😾")
    }
})

const addToCalendar =(meetingDetails)=>{
    const calendar = new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        resolve(calendar);
    }) 
    return calendar;
}
myPromises
    .then(addToCalendar)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

