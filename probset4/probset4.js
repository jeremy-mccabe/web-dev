//#1
var addNumbers = function(str){
  var temp = "";
  var total = 0;
  for(var i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
      temp += str[i];
    } else{
      temp += " ";
    }
  }
  var arr = temp.split(" ");
  var numArr = [];
  for(var j = 0; j < arr.length; j++){
    if(arr[j]!=''){
      numArr.push(arr[j]);
    }
  }
  var total = 0;
  for (var x = 0; x < numArr.length; x++) {
    total += parseInt(numArr[x]);
  }
  return total;
}
addNumbers("88Hello 3World!");


//#2
var longestWord = function(str){
  var king = ' ';
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++){
    if(arr[i].length > king.length){
      king = arr[i]
    }
  }
  return king;
}
longestWord('This is the newest string');
