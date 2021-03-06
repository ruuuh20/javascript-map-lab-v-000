const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

/* var sortedRobots = robots.map(robot => {
  for(let i = 0, i < knownDecepticons.length, i++) {
    if(knownDecepticons[i] === robot["name"]) {
      return Object.assign({}, robot, {alliance: 'decepticon'})
    }
  }
  return Object.assign({}, robot, {alliance: 'autobot'})
})
*/

/* const sortedRobots = robots.map(function(robot) {
   if (knownDecepticons.includes(robot.name)){
     return Object.assign({}, robot, {
       alliance: 'decepticon'
     });
  } else {
     return Object.assign({}, robot, {
       alliance: 'autobot'
     });
   }
 });
 */

 var sortedRobots = robots.map(robot => {
   const decepticon = knownDecepticons.includes(robot.name);
   return Object.assign({}, robot, {
     alliance: decepticon ? 'decepticon' : 'autobot'
   });

 });


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];



// var new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])


var coloredZebraStripes = zebraStripes.map((stripe, index) => {
  if  (index % 2 === 0) {
    return Object.assign({}, stripe, {
      color: 'black'
    });
  } else {
    return Object.assign({}, stripe, {
      color: 'white'
    });
  }

});
