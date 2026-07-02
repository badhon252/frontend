// const promises2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Promise 2 has been resolved!");
//     }, 5000)
// });
// const promises3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Promise 3 has been resolved!");
//     }, 2000)
// });

// Promise.all([promises2, promises3])
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err));

// Promise.race([ promises2, promises3])
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err));


const meetingDeatails ={
    name: "Technical Meeting",
    location: "Discord",
    time: "10.00am"
}

async function addToCalendar (meetingDetails){
    const calendar = `${meetingDetails.name}🎉 has been scheduled on ${meetingDetails.location}📌 at ${meetingDetails.time} 🕚`
    return Promise.resolve(calendar);
}