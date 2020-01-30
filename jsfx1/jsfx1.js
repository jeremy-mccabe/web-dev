
var tripleFive = function(){
  for(var i = 0; i < 3; i++){
    console.log("Five!");
  }
}
tripleFive();

///////////////////////////
var lastLetter = function(word){
  console.log(word.slice(-1));
}
lastLetter("hello");

/////////////////////////
var square = function(number){
  console.log(number * number);
}
square(5);

///////////////////////////
var negate = function(num){
  console.log(-Math.abs(num));
}
negate(6);

///////////////////////////


var toArray = function(a,b,c){

var newArr = [];
newArr[0] = a;
newArr[1] = b;
newArr[2] = c;

console.log(newArr);

}
toArray(1,2,3);


//////////////////////////


var startsWithA = function (string){

if(string.charAt(0) === 'A' || string.charAt(0) === 'a'){
    console.log(true)
  }else{console.log(false)}


 };
 startsWithA('ants');



///////////////////////////



var excite = function (word){

  console.log(word + '!!!');

}
excite('hello');



///////////////////////////

var sun = function (word){

  if(word.indexOf('sun') > -1){
      console.log(true)
    }else{
     console.log(false)
    }

}

sun('sunfire');


///////////////////////////

var tiny = function(num){
console.log(

num > 0 && num < 1


)
}
tiny(.3);


///////////////////////////

var getSeconds = function (time){
  var min = time.substring(0,2);
  var sec = time.substring(3,5);
  var minSecs = parseInt(min) * 60;
  var secSecs = parseInt(sec);
  var totalSecs = minSecs + secSecs;
  console.log(totalSecs);

}
getSeconds('10:25');
