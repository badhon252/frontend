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
        return Promise.resolve(calendar);
}

// myPromises
//     .then(addToCalendar)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

async function myMeeting(){
    try{
       const meetingDetails = await myPromise;
       const calendar = await addToCalendar(meetingDetails)
       console.log(calendar)
    }catch(err){
        console.log("Error: ");
    }
}

console.log(myMeeting());