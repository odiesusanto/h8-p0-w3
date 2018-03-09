function palindrome(kata) {
  var word = kata.length;
  for(var i = 0; i < word / 2; i++){
    if(kata[i] === kata[kata.length - 1]) {
      return true;
    } else {
      return false;
    }
  }  
} 