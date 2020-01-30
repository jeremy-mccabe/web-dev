
// #1
var getName = function (obj){
  var name = obj.name;
  return name;
};
console.log(getName({name: 'Jeremy', age: 29}));


// #2
var totalLetters = function(arr){
  var word = arr.toString();
  return word.length-(arr.length-1);
};
console.log(totalLetters(['here','i','am','friend']));


// #3
var keyValue = function(a,b){
var newObj = {};
newObj[a]= b;
  return newObj;
};
console.log(keyValue('animal','squirel'));


// #4
var negativeIndex = function (arr,neg){
  var target = arr.length+neg;
  result= arr[target];
  return result;
};
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));


// #5
var removeM = function (str){
str.toLowerCase();
var mLess=[];
for(var i=0; i<str.length; i++){
if(str.charAt(i)!=='m'){
    mLess.push(str.charAt(i));
  }
}
var newbie = mLess.join('');
return newbie;
  };
console.log(removeM('monkeymadness'));


// #6
var printObject = function(obj){
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + " is " + obj[key]);
  };
};
};
printObject({color:'blue', shade:'dark', sound:'drums'});


// #7
var vowels = function(str){
  var vowels =[];
  str.toLowerCase();
  for(var i = 0; i < str.length; i++){

    if(str.charAt(i)==='a'||str.charAt(i)==='e'||str.charAt(i)==='i'||str.charAt(i)==='o'||str.charAt(i)==='u'){
      vowels.push(str.charAt(i))
    }
  }
console.log(vowels);

};
vowels('helloworld');


// #8
var twins = function(arr){
  var check = true;
for(var i = 0; i < arr.length; i++){
  if(arr[i]===arr[i-1]){
    check = false;
    return check;
  }
}
  return check;
};
twins(['a','b','c','c','d']);


// #9
var or = function(arr){
  var check = '';
  //gradually loops through 4 elements of arr
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === true){check=true}
  }
  if(check !== true){
    check=false
  }

  return check;
};
or([false,true,false,false]);


// #10
var unique = function(strings){
var noDups = [];
for(var i = 0; i < strings.length; i++){
  if(noDups.indexOf(strings[i]) == -1){
    noDups.push(strings[i])
  }
}
return noDups;
};
unique(['hi','how','are','ya','are']);
