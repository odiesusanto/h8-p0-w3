// function groupAnimals(arr) {
//   var group = [];
  
//   for (i=0; i < arr.length; i++) {
//     var list = [];
//     var animals = arr[i][0]; 
//     var sort = arr[i];
    
//     for (var j=arr.length-1; j>i; j--) {
//       if (animals === arr[j][0]) {
//         sort += ', ' + arr[j];
//         arr.splice(j,1);
//       }
//     }
//     list.push(sort);
//     group.push(list);
//   }
//   return group.sort();
// }

// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));


function groupAnimals(arr) {
  var group = [];
  
  arr.sort();
  var list = arr[0][0];
  var animals = [];
  
  for (i = 0; i < arr.length; i++) {
   
    if (list == arr[i][0]) {
      group.push(arr[i]);
    } else {
      animals.push(group);
      group = [];
      list = arr[i][0];
      group.push(arr[i]);
    }
    if (i === arr.length - 1) {
      animals.push(group);
    } 
  }
  return animals;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));