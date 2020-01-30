var letterCapitalize = function(str){
  words = str.toLowerCase().split(' ');
  for(var i = 0; i < words.length; i++){
      var letters = words[i].split('');
      letters[0] = letters[0].toUpperCase();
      words[i] = letters.join('');
  };
  return words.join(' ');
};
letterCapitalize('Here is my sentence.');

//////////////////////////////////////////

var numWords = 1;
var wordCount = function(string){
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) === ' '){
    numWords++;
    }
  }
};
wordCount("Never eat shredded wheat");
console.log(numWords);

//////////////////////////////////////////

var primeTime = function (num){
  for(var i = 2; i < num; i++){
    if(num % i === 0){return false;}
  }
  return true;
};
primeTime(9);
