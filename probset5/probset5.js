// JS: Problem Set #5
// Requirements

//#1
// AlphabetSoup that takes a single string
// and returns the string with the letters in alphabetical
var alphabetSoup = function (str){
var arr = str.split('');
var alphaArr = arr.sort();
var alphaString = alphaArr.join();

return alphaString;
}
alphabetSoup('hippopotamus');
// order (ie. hello becomes ehllo).



//#2
// Takes a single string and returns the
// number of vowels the string contains
var vowelCount = function (st){
var str = st.toLowerCase();
var count = 0;
for (var i = 0; i < str.length; i++){
  if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
    count ++;
  }
}

return count;
}
vowelCount('All cows eat grass');
//(ie. "All cows eat grass" would return 5).
