
//declarations
var victims = [];
var helpers = [];

//victim prompt
var numVic = prompt('How many disaster victims?');

//victim info loop
for (var i = 0; i < numVic; i++){
  var victimObj = {name:'',phone:'',address:''};
  victimObj.name=prompt('Name of victim #'+(i+1))
  victimObj.phone=prompt('Phone number of victim #'+(i+1))
  victimObj.address=prompt('Address of victim #'+(i+1))
  victims.push(victimObj);
};

//helpers prompt
var numHelp = prompt('How many people can help?');

//helpers info loop
for (var i = 0; i < numHelp; i++){
  var helperObj = {name:'',phone:'',address:''};
  helperObj.name=prompt('Name of aid-worker #'+(i+1))
  helperObj.phone=prompt('Phone number of aid-worker #'+(i+1))
  helperObj.address=prompt('Address of aid-worker #'+(i+1))
  helpers.push(helperObj);
};

//alert of # of helpers/victims info
alert('There are '+numVic+' victims and '+numHelp+' aid-workers.  Here is their info...');

//victim personal info displayed
for(var i = 0; i < numVic; i++){
  var name = victims[i].name;
  var phone = victims[i].phone;
  var addy = victims[i].address;
  alert('VICTIM #'+(i+1)+' INFO- \nNAME: '+name+'\nPHONE:+'+phone+'\nADDRESS: '+addy);

};

//helper personal info displayed
for(var i = 0; i < numHelp; i++){
  var name = helpers[i].name;
  var phone = helpers[i].phone;
  var addy = helpers[i].address;
  alert('AID-WORKER #'+(i+1)+' INFO- \nNAME: '+name+'\nPHONE:+'+phone+'\nADDRESS: '+addy);

};
