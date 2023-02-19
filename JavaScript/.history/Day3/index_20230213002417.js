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
    return dev
    }

console.log(getDeveloperProjects('d1'));