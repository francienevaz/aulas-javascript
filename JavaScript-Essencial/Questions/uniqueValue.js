// There are serveral ways to find unique values in an array. Here are some of them:

// Using Set
const roadmapsSet = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmapsSet = [...new Set(roadmaps)];
console.log(uniqueRoadmapsSet); // ['JavaScript', 'React', 'Node.js']
// Using filter()
const roadmapsFilter = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmapsFilter = roadmaps.filter(
  (roadmap, index) => roadmaps.indexOf(roadmap) === index
);
console.log(uniqueRoadmapsFilter); // ['JavaScript', 'React', 'Node.js']
// Using reduce()
const roadmapsReduce = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmapsReduce = roadmaps.reduce((unique, roadmap) => {
  return unique.includes(roadmap) ? unique : [...unique, roadmap];
}, []);
console.log(uniqueRoadmapsReduce); // ['JavaScript', 'React', 'Node.js']
// Using forEach()
const roadmapsForEach = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmapsForEach = [];
roadmaps.forEach((roadmap) => {
  if (!uniqueRoadmapsForEach.includes(roadmap)) {
    uniqueRoadmapsForEach.push(roadmap);
  }
});
console.log(uniqueRoadmapsForEach); // ['JavaScript', 'React', 'Node.js']
// Using for...of
const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
const uniqueRoadmaps = [];
for (const roadmap of roadmaps) {
  if (!uniqueRoadmaps.includes(roadmap)) {
    uniqueRoadmaps.push(roadmap);
  }
}
console.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']