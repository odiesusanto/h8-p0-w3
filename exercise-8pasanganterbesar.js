function pasanganTerbesar(num) {
  var angka = [];
  var number = num.toString(); //change the number to string coz array works for string

  for (var i = 0; i < number.length; i++) { //need to rmb to put this because u're looking at the number from the first one first, kalo gak mulai nya dari mana?
    if(number[i+1] === undefined) {
      break;
    }
    number[i] + number[i+1]; //to compare the index with the index position after
    angka.push(number[i] + number[i+1]); //.push to make the number that's been string into an array
}
 angka.sort(function(a,b) {return b -a}); //default sort rules
 return Number(angka[0]); //it has to start from the beginning, the biggest number is in the first position
}

pasanganTerbesar(8576);
pasanganTerbesar(7463957);