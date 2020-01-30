
var phone = prompt("What is your phone number?" (enter: xxx-xxx-xxxx));
console.log(phone.charAt(3) === '-' && phone.charAt(7) === '-');

var dob = prompt("What is your DOB? (enter: xx/xx/xx)");
console.log(dob.charAt(2) === '/' && dob.charAt(5) === '/');


var postalCode = prompt("What is your postal code? (enter: xxxxx or xxxxx-xxxx)");
 console.log(postalCode.length === 5 || (postalCode.length === 10 && postalCode.charAt(5) === '-'));



var state = prompt("What is your state abbreviation? (enter: XX)");
  var caps = state.toUpperCase();

  console.log(state.length === 2 && state === caps)
;


var married = prompt("Are you married? (enter: Yes or No)");
var check = married.toLowerCase();

      if(check === 'yes'){
        console.log('sorry')
      }else if(check === 'no'){
        console.log('nice..')
      }else{
        console.log('Invalid Choice')
      };
