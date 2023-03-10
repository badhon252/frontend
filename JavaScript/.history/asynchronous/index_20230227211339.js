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
        reject("Meeting has already been scheduled! πΎ")
    }
})
 
const addToCalendar =(meetingDetails)=>{
        const calendar = `${meetingDetails.name}π has been scheduled onπ ${meetingDetails.location} at π ${meetingDetails.time}`
        Promise.resolve(calendar);
        return calendar;
}

myPromises
    .then(addToCalendar)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

