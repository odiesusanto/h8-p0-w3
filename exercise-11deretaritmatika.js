function tentukanDeretAritmatika(arr) {
  var middle = 0;
  var diff = arr[1] - arr[0];
  
  for (var i=0; i < arr.length-1; i++) {
    middle = arr[i+1] - arr[i];
  }
  return diff === middle; 
}