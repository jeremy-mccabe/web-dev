//#1
var palindrome = function (str){
  var splitUp = str.split('');
  var reverseIt = splitUp.reverse();
  var backToString = reverseIt.join('');

  if(backToString==str){
    return true;
  }else{return false}
};
palindrome('racecar');

//#2
var dashInsert = function (num){
  var str = num.toString();
  var newStr = '';

  for (var i = 0; i < str.length-1; i++){
    if(!(str.charAt(i)%2 == 0) && !(str.charAt(i+1)%2 == 0)){
      newStr += '-' ;
      newStr += str.charAt(i);
    }else{
      newStr += str.charAt(i);
    }
  }
  return newStr;

}
dashInsert(454555);
