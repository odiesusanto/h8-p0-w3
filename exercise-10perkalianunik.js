function perkalianUnik(arr) {
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    var numbers = 1;
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        numbers *= arr[j];
      }
    }
  result.push(numbers);
    
  }
  return result;
}