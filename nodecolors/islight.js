var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];


var islight = function(a,b,c){
  var lightness = (a*.2126)+(b*.7152)+(c*.0722);
  if(lightness>155){
    console.log('LIGHT');
  }else{
    console.log('DARK');
  }
};

islight(r,g,b);
