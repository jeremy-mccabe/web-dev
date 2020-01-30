// NUMBER 1
console.log("HELLO WORLD")
// NUMBER 2
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
  sum += Number(process.argv[i]);
}
console.log(sum);
// var fs = require('fs')
// NUMBER 3
var fs = require('fs');
var buf = fs.readFile(err, '/Users/jeremy/Desktop/Coding/CSSFlipDeck.css');
var str = buf.toString();
var array = str.split('\n');
console.log(array.length+1);
// NUMBER 4
var fs = require('fs');
var myNum = undefined;
function main(myFunc){
  // var fileContents = fs.readFile('/Users/jeremy/Desktop/Coding/CSSFlipDeck.css','utf-8',function callback(err,data){ console.log(data.valueOf())});
  // console.log(fileContents)
  //myFunc(fileContents)
  fs.readFile('/Users/jeremy/Desktop/Coding/CSSFlipDeck.css','utf-8',function read(err,data){
    if (err) {
      throw err;
    }
    var content = data
    // console.log(content)
    // processContent(content)
    countlines(data)
  })
  // console.log(this_content)
  // console.log(this_content)
};
function countlines(data){
  var content = data
  var number = content.split('\n').length /2-.5
  console.log(number)
}
// function processContent(content){
//   // console.log(content)
// }
main()
