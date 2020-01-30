/*The word they entered, verbatim
How many characters are in it (length property)
The word in lowercase (toLowerCase)
The word in uppercase (toUpperCase)
The word in a sentence
The subword from the 2nd to the 4th character, inclusive (substring)*/



var word = prompt("Enter any word...");
var lows = word.toLowerCase();
var caps = word.toUpperCase();
alert("You entered: " + word
+ '\nThere are ' + word.length + ' characters in your word'
+ '\nThe third character in your word is "' + word[2] + '"'
+ '\nLowercase: ' + lows
+ '\nUppercase: ' + caps
+ '\nSentence: I went for a walk, and I found a ' + word + '!!'
+ '\nSubword: ' + word.substring(1,4)
);



// You entered: Mango
// There are 5 characters in the word.
// The third character is 'n'
// Lowercase: mango
// Uppercase: MANGO
// Example: I have wanted a Mango since I was a little boy.
// Subword: ang
