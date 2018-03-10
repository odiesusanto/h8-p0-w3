function tentukanDeretGeometri(arr) {
  var diff = arr[1] / arr[0];
  var geometri = true;
  
  for (var i=1; i < arr.length-1; i++) {
    var nextDiff = arr[i+1] / arr[i];
    
    if (nextDiff === diff) {
      return true;
    } else {
      return false;
    }
  }
}