// JS: Problem Set #6
// Requirements

//#1
// Write a function secondGreatLow that takes a single
// array of numbers and returns the second lowest and
// second greatest numbers, respectively, separated by
// a space. For example: if the array contains [7, 7, 12, 98, 106]
// the output should be "12 98". The array will not be empty and
// will contain at least 2 numbers. It can get tricky if there's
// just two numbers!
var secondGreatLow = function (arr){
  //for two items in the array
  if(arr.length==2){
    if(arr[0]>arr[1]){
      return arr[1] + ' ' + arr[0];
    }else{
      return arr[0] + ' ' + arr[1];
    }
  }
  //for three items in the array
  if(arr.length==3){
    arr.sort(function(a, b){return a-b});
    return arr[1] + ' is in the middle';
  }
  //for four or more items in the array
  if(arr.length>3){
    arr.sort(function(a, b){return a-b});
    return arr[1] + ' ' + arr[arr.length-2];
  }
  //end function
}
secondGreatLow([44,2,12,50]);

//#2
// Write a function timeConvert that takes a
// number parameter and returns the number of hours and minutes
// the parameter converts to (ie. if num = 63 then the output
// should be 1:3). Separate the number of hours and minutes
// with a colon.
var timeConvert = function (num){
var h =  Math.floor(num/60);
var m = num % 60;
return h + ':' + m;
}
timeConvert(63);
// (ie. if num = 63 then the output should be 1:3).
