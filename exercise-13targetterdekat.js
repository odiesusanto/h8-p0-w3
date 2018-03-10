function targetTerdekat(arr) {
  var x = [];
  var o = [];
  var nextXo = [];
  
  for (var i=0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      x.push(i);
    } else if (arr[i] === 'o') {
      o.push(i);
    }
  }
  if (o > x[0]) {
    x.reverse();
  }
  
  for (var j=0; j < x.length; j++) {
    if (x[j] > o[0]) {
      nextXo.push(x[j]);
      break;
    }
  }
  for (var k=0; k < x.length; k++) {
    if (x[k] < o[0]) {
      nextXo.push(x[k]);
      break;
    }
  }
    if (o[0] < nextXo[0]) {
      nextXo.reverse();
    }
  if (x[0] < o[0]) {
    return o[0] - nextXo;
  } else if (o[0] < x[0]) {
    return Math.abs(nextXo[0] - o[0]);
  } else {
    return 0;
  }
}