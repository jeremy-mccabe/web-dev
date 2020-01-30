//#1
function firstReverse(str){
  var splitUp = str.split('');
  var reverseIt = splitUp.reverse();
  var backToString = reverseIt.join('');
  return backToString;
}

firstReverse('Hello World!');

//#2
function swapCase(str){

  var newStr = '';
  var strCapd = str.toUpperCase();
  var strDroped = str.toLowerCase();

  for (var i = 0;i<str.length;i++){
    if(str[i]===strCapd[i]){
      newStr += strDroped.charAt(i)
    }else{
      newStr += strCapd.charAt(i)
    }
  }
  return newStr;
}

swapCase('Hello World!');
