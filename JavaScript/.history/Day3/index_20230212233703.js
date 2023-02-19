
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


function getDeveloperPorjects(developers, projects){
    const developer = [developers, projects]
    let d1 = developers.map((pId)=>(pId.projects).map((id,i)=>console.log(`${id} ${i}`)))
    console.log(d1)
    let dev = developer.map((prev, curr)=>prev.projects)
//   const devId = developers.map(dev=>dev.project.reduce(id=>id));
//   console.log(devId)
  // return developers.map(dev=>`${dev.projects.map(id=>id) == projects.map(p=>p.id) }`)
}

getDeveloperPorjects(developers, projects)


