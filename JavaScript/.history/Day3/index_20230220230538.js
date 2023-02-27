// Write a JavaScript function that returns an array containing the names of all projects on which a specific developer has contributed.
/*? 
You will receive one point for each of the following criteria:
- Your approach returns the correct value given valid inputs.
- Your implementation uses a functional programming style.
- Your solution has a linear time complexity. 
*/
const developers = [
  { id: 'd1', name: "Kristof", projects: ['p1', 'p2'] },
  { id: 'd2', name: "Arvid", projects: ['p1', 'p2', 'p4'] },
  { id: 'd3', name: "Joren", projects: ['p3', 'p4'] },
];

const projects = [
  { id: 'p1', name: "Color Passport - The Digital One" },
  { id: 'p2', name: "In The Pocket - Smart City App" },
  { id: 'p3', name: "Teamleader - App" },
  { id: 'p4', name: "Apporto - Social Shopping App" },
];

// const getDeveloperProjects = (developerId) => {
//     const developer = developers.find(developer => developer.id === developerId);
//     const developerProjects = developer.projects;
//     const projectNames = [];
//     developerProjects.forEach(projectId => {
//         const project = projects.find(project => project.id === projectId);
//         projectNames.push(project.name);
//     });
//     return projectNames;
//     }

// console.log(getDeveloperProjects('d1'));

// const getDeveloperProjects = (developerId) => {
//     const developer = developers.find(developer => developer.id === developerId);
//     console.log(developer)
//     const developerProjects = developer.projects;
//     const projectNames = projects
//         .filter(project => 
//             developerProjects.includes(project.id))
//             .map(project => project.name);
//     return projectNames;
//     }

// console.log(getDeveloperProjects('d3'));

const getDeveloperProjects = (developerId) => {
    const dev = developers.find(developer=> developer.id === developerId)
    const devProjects = dev.projects;
    const projectsName = projects
                        .filter(project => devProjects.includes(project.id))
                        .map(project => `${dev.name}: Contribute on ${project.name}`)
    return projectsName;
}

// console.log(getDeveloperProjects('d3'));


//! map filter reduce 

const arr = [1,2,3,4,5,6,7,10,8,9];

// const output = arr.map(x=>x)

let sum = 0;
// const output = arr.filter(x=>x<6 )

// finding max num 
// const output = arr.reduce((acc,curr)=> curr > acc ? curr : acc,0)

const users = [
  {firstName: 'Kristof', lastName: 'De Spiegeleer', age: 31},
  {firstName: 'Arvid', lastName: 'De Spiegeleer', age: 28},
  {firstName: 'Joren', lastName: 'De Spiegeleer', age: 26},
  {firstName: 'John', lastName: 'Dou', age: 26},
  {firstName: 'Angela', lastName: 'Yu', age: 26},
]

// const output = users.reduce((acc, curr)=>{
//   console.log(acc)
//   acc[curr.age] = acc[curr.age] ? ++acc[curr.age] : 1
//   return acc
// }, {}) //? {26: 3, 28: 1, 30: 1} 


//?Using filter & map function
// const output = users.filter(user=> user.age<30).map(user=>user.firstName) 
// ['Arvid', 'Joren', 'John', 'Angela']

const output = users.reduce((acc, curr)=>acc.age<30?acc:curr)

console.log(output)