function angkaPalindrome(num) {
    var angka = num.toString();
    var palindrome = '';
    
    for (i = 0; angka != palindrome; i++) { //nambahin angka utk mencari palindrome
      num++; 
      angka = num.toString(); //ngubah angka jd string ''
      
      var number = ''; //utk nampung result balikin angka
      for (var j = angka.length - 1; j >= 0; j--) { //loop utk balikin angka setelah di tambahin
      number += angka[j]; //angka yg di blakang sudah sama dengan angka yg dpn 
      palindrome = number; //var number di replace sama penjalasan bahwa dia palindrome,
                            //for example if number is 11, and flipped from back to front, then it is a palindrome because it has the same value
    }
    }
   return angka;
  }
  
  console.log(angkaPalindrome(7));
  console.log(angkaPalindrome(11));
  console.log(angkaPalindrome(198));