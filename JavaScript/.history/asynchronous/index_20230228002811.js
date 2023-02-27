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
            "location": "Discord",
            "time": "10.00am"
        }
        resolve(meetingDetails);
    }else{
        reject("Meeting has already been scheduled! 😾")
    }
})

const addToCalendar =(meetingDetails)=>{
        const calendar = `${meetingDetails.name}🎉 has been scheduled on ${meetingDetails.location}📌 at ${meetingDetails.time} 🕚`
        Promise.resolve(calendar);
        return calendar;
}

// myPromises
//     .then(addToCalendar)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))



const promises2 = Promise.resolve("Promise 2 has been resolved!");
const promises3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Time is up!");
    }, 2000)
});

Promise.all([myPromises, promises2, promises3])
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

Promise.race([myPromises, promises2, promises3])
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
