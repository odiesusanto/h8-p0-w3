function balikString(word){
  var string = '';
  for(var i = word.length - 1; i >= 0; i--){
     string = string + word[i];
  }
  return string;
}
balikString("hello world!");

console.log(balikString("hello world!"));