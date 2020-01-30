//App/ModuleName...
angular.module('app', [])
// controllerDeclarations...
.controller('mainController', mainControllerFunction)
// "injector"...
mainControllerFunction.$inject = ['$scope'];

// Main func START =>>

function mainControllerFunction() {
  var Main = this;
  Main.clicked= false;


  // Show headers after button click and back...
  
  Main.revealDiv = function(){

    if(Main.clicked == false){
      Main.clicked = true;
    }else{
      Main.clicked = false;
    }
  };

  Main.clicked2= false;

  Main.revealDiv2 = function(){
    if(Main.clicked2 == false){
      Main.clicked2 = true;
    }else{
      Main.clicked2 = false;
    }
  };

  // Pink para text and back...

  Main.color=false;
  Main.colorBack=false;

  Main.changeIt = function(){
    Main.color=true;
    if(Main.color==true){
      document.getElementById('redpara').style.color = 'pink';
    }
  }
  Main.changeItBack = function(){
    Main.colorBack=true;
    if(Main.colorBack==true){
      document.getElementById('redpara').style.color = 'black';
    }
  }

  // Added expression...

  Main.exclaim='!';

  // Confirm navagate away...

  Main.checker = function() {

    var answer = confirm('Are you sure you want to navigate away from this page?');
    if (!answer) {
      event.preventDefault();
      document.getElementById("anchor").removeAttribute("href");
    }
  };

  // box appearance...

  Main.showModal= false;

  Main.boxAppear = function(){
    Main.showModal=true;
  };

  // box close...

  Main.closeWindow = function(){
    Main.showModal = false;
  };

  // END \\\\\\\\\\\\\\\\\\\\\\\\
};
