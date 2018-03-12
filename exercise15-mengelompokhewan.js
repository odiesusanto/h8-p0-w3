function groupAnimals(arr) {
  var group = [];
  
  for (i=0; i < arr.length; i++) {
    var list = [];
    var animals = arr[i][0]; 
    var sort = arr[i];
    
    for (var j=arr.length-1; j>i; j--) {
      if (animals === arr[j][0]) {
        sort += "', '" + arr[j];
        arr.splice(j,1);
      }
    }
    list.push(sort);
    group.push(list);
  }
  return group.sort();
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));