//App/ModuleName...
angular.module('app', [])
// controllerDeclarations...
.controller('mainController', mainControllerFunction)
// "injector"...
mainControllerFunction.$inject = ['$scope'];

// Main func START =>>

function mainControllerFunction() {

  var Main = this;
  Main.displayAction = 'Show Form';
  Main.here = 0;


Main.toggleForm=function(){
  if(Main.here == 0){
    Main.here = 1;
    Main.displayAction = 'Hide Form';
  }else{
  Main.here = 0;
  Main.displayAction = 'Show Form';
  }

};

Main.name = 'ALF';
Main.bio =  'An alien from the planet Melmac who follows an amateur radio signal to Earth and crash-lands into the garage of the Tanners. The Tanners are a suburban middle-class family in the San Fernando Valley area of California. The family consists of social worker Willie, his wife Kate, their teenage daughter Lynn, younger son Brian, and their cat Lucky. Unsure what to do, the Tanners take ALF into their home and hide him from the Alien Task Force (a part of the U.S. military that specializes in aliens) and their nosy neighbors Trevor and Raquel Ochmonek, until he can repair his spacecraft. He generally hides in the kitchen. It is eventually revealed that ALF\'\s home planet Melmac exploded because of a catastrophe involving a nuclear war.';
Main.books = 'How to Cook Cats: Vol 3, Space: And Beyond, Sweet Hairdos in the 21st Century';
Main.libs = 'Angular, React, Redux, Leaflet, Meteor';

Main.addName = '';
Main.addBio =  '';
Main.addBooks = '';
Main.addLibs = '';

Main.submitEdit = function(){
  Main.displayAction = 'Show Form';
  Main.here = 0;
  Main.name = Main.addName;
  Main.bio = Main.addBio;
  Main.books = Main.addBooks;
  Main.libs = Main.addLibs;

};

Main.checker = function() {

  var answer = confirm('Are you sure you want to navigate away from this page?');
  if (!answer) {
    event.preventDefault();
  }
};

  // END \\\\\\\\\\\\\\\\\\\\\\\\
};
