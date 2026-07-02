// Write a JavaScript function that returns an array containing the names of all projects on which a specific developer has contributed.
/*? 
You will receive one point for each of the following criteria:
- Your approach returns the correct value given valid inputs.
- Your implementation uses a functional programming style.
- Your solution has a linear time complexity. 
*/

/* const developers = [
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

const output = users.reduce((acc, curr)=> curr.age<30? [...acc, curr.firstName]: [], [])

console.log(output)
 */

// Import the math.js library for matrix operations
import { inv } from 'mathjs';

//! Helper function to convert a character to a number
const charToNum = (char) => {
  return char.charCodeAt(0) - 65;
}

// Helper function to convert a number to a character
const numToChar = (num) => {
  return String.fromCharCode(num + 65);
}

const hillEncrypt = (plainText, key) => {
  var cipherText = "";
  var blockSize = key.length;

  // Pad the plaintext with X's if necessary
  while (plainText.length % blockSize != 0) {
    plainText += "X";
  }

  // Iterate over the plaintext in blocks of size blockSize
  for (var i = 0; i < plainText.length; i += blockSize) {
    var block = plainText.substring(i, i + blockSize);
    var blockNums = [];

    // Convert the block to numbers
    for (var j = 0; j < blockSize; j++) {
      blockNums.push(charToNum(block.charAt(j)));
    }

    // Perform matrix multiplication
    var cipherNums = [];
    for (var j = 0; j < blockSize; j++) {
      var sum = 0;
      for (var k = 0; k < blockSize; k++) {
        sum += key[j][k] * blockNums[k];
      }
      cipherNums.push(sum % 26);
    }

    // Convert the cipher numbers to characters
    for (var j = 0; j < blockSize; j++) {
      cipherText += numToChar(cipherNums[j]);
    }
  }

  return cipherText;
}

const hillDecrypt = (cipherText, key) => {
  var plainText = "";
  var blockSize = key.length;

  // Iterate over the ciphertext in blocks of size blockSize
  for (var i = 0; i < cipherText.length; i += blockSize) {
    var block = cipherText.substring(i, i + blockSize);
    var blockNums = [];

    // Convert the block to numbers
    for (var j = 0; j < blockSize; j++) {
      blockNums.push(charToNum(block.charAt(j)));
    }

    // Perform matrix multiplication with the inverse key
    var plainNums = [];
    var inverseKey = inv(key);
    for (var j = 0; j < blockSize; j++) {
      var sum = 0;
      for (var k = 0; k < blockSize; k++) {
        sum += inverseKey[j][k] * blockNums[k];
      }
      plainNums.push(sum % 26);
    }

    // Convert the plain numbers to characters
    for (var j = 0; j < blockSize; j++) {
      plainText += numToChar(plainNums[j]);
    }
  }

  return plainText;
}

let plainText = "HELLO";
let key = [  [5, 8],
  [17, 3]
];

let cipherText = hillEncrypt(plainText, key);
console.log("Encrypted text: " + cipherText); // Output: Encrypted text: YJLOR

let decrypted = hillDecrypt(cipherText, key)
console.log("Decrypted text: " + decrypted);
