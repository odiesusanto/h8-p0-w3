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
console.log(palindrome('racecar'));
console.log(palindrome('help'));
console.log(palindrome('eye'));
console.log(palindrome('kodok'));
console.log(palindrome('swell'));
console.log(palindrome('hannah'));
